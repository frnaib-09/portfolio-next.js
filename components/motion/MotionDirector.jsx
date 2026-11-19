"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * One place that drives every scroll / intro animation on the page.
 * Components opt in declaratively with data attributes, so they can stay
 * server components:
 *
 *  data-reveal="up"        fade + rise when scrolled into view
 *  data-reveal="stagger"   same, staggered over children (or data-reveal-target)
 *  data-reveal="clip"      clip-path wipe with inner image zoom-out
 *  data-reveal="line"      horizontal line that draws itself
 *  data-split              masked line-by-line headline reveal
 *  data-scrub-words        words light up as you scroll through the paragraph
 *  data-parallax="0.15"    scrubbed vertical drift (fraction of own height)
 *  data-magnetic           element follows the pointer a little on hover
 *  data-timeline           career timeline: fill line + active dots
 *  data-hero-*             hero intro, played when the preloader finishes
 *
 * Everything is skipped under prefers-reduced-motion, leaving content visible.
 */
const MotionDirector = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();
    const cleanups = [];

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = (sel, root = document) => gsap.utils.toArray(root.querySelectorAll(sel));
      const onView = (trigger, start = "top 85%") => ({ trigger, start, once: true });

      /* ---------- scroll progress bar ---------- */
      const bar = document.getElementById("scroll-progress");
      if (bar) {
        gsap.to(bar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      }

      /* ---------- hero ---------- */
      const heroTitle = document.querySelector("[data-hero-title]");
      const heroFades = q("[data-hero-fade]");
      const heroIntro = gsap.timeline({ paused: true });

      if (heroTitle) {
        const split = SplitText.create(heroTitle, { type: "chars", mask: "chars" });
        heroIntro.fromTo(split.chars, { yPercent: 115, rotate: 6 }, {
          yPercent: 0,
          rotate: 0,
          duration: 1.3,
          ease: "expo.out",
          stagger: 0.045,
        });
      }
      if (heroFades.length) {
        heroIntro.fromTo(
          heroFades,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.1 },
          0.35,
        );
      }

      const playIntro = () => heroIntro.play();
      if (window.__preloaderDone) playIntro();
      else window.addEventListener("preloader:done", playIntro, { once: true });
      cleanups.push(() => window.removeEventListener("preloader:done", playIntro));

      /* ---------- opening scroll scene ----------
         The hero stage is sticky inside a 220svh section; while it is held
         in place the name splits apart, the UI drifts away, the stage dims and
         a statement reveals word by word. Wrappers ([data-hero-out]) are
         animated here, never the [data-hero-fade] nodes the intro animates. */
      const scene = document.querySelector("[data-hero-scene]");
      if (scene) {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: scene,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        tl.to('[data-hero-line="left"]', { x: () => -window.innerWidth * 0.55, duration: 0.6 }, 0)
          .to('[data-hero-line="right"]', { x: () => window.innerWidth * 0.55, duration: 0.6 }, 0)
          .to("[data-hero-title]", { scale: 1.25, autoAlpha: 0, transformOrigin: "30% 50%", duration: 0.6 }, 0)
          .to('[data-hero-out="up"]', { y: -80, autoAlpha: 0, duration: 0.3 }, 0)
          .to('[data-hero-out="down"]', { y: 80, autoAlpha: 0, duration: 0.3 }, 0)
          .to('[data-hero-out="right"]', { x: 240, rotate: 8, autoAlpha: 0, duration: 0.4 }, 0)
          .to("[data-hero-dim]", { opacity: 0.75, duration: 0.5 }, 0.15);

        const statement = scene.querySelector("[data-hero-statement] p");
        if (statement) {
          const split = SplitText.create(statement, { type: "words" });
          // The wrapper is hidden in the markup (no flash before JS runs);
          // it is only made visible once the scene has started scrolling.
          tl.fromTo(
            "[data-hero-statement]",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.01, immediateRender: true },
            0.29,
          ).fromTo(
            split.words,
            { autoAlpha: 0, yPercent: 60, rotateX: -60, transformPerspective: 600 },
            { autoAlpha: 1, yPercent: 0, rotateX: 0, stagger: 0.05, duration: 0.25, ease: "power2.out" },
            0.3,
          ).to(statement, { scale: 0.92, autoAlpha: 0.6, duration: 0.2 }, ">0.1");
        }
      }

      const heroBg = document.querySelector("[data-hero-bg]");
      if (heroBg) {
        gsap.to(heroBg, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: { start: 0, end: () => window.innerHeight * 2.2, scrub: true },
        });
      }

      /* ---------- generic reveals ---------- */
      q('[data-reveal="up"]').forEach((el) => {
        gsap.fromTo(el, { y: 70, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: onView(el, "top 90%"),
        });
      });

      q('[data-reveal="stagger"]').forEach((el) => {
        // Custom targets may be transformed by their own component (e.g. the
        // accordion's tilt), so only touch y/opacity and never clear transforms.
        const custom = Boolean(el.dataset.revealTarget);
        const targets = custom ? q(el.dataset.revealTarget, el) : gsap.utils.toArray(el.children);
        gsap.fromTo(targets, {
          y: 80,
          autoAlpha: 0,
          ...(custom ? {} : { rotateX: -12, transformPerspective: 900, transformOrigin: "50% 0%" }),
        }, {
          y: 0,
          autoAlpha: 1,
          ...(custom ? {} : { rotateX: 0 }),
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.09,
          scrollTrigger: onView(el),
        });
      });

      // Small items (skill chips) pop in one after another.
      q('[data-reveal="pop"]').forEach((el) => {
        gsap.fromTo(el.children, { scale: 0.4, autoAlpha: 0, y: 12 }, {
          scale: 1,
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(2.2)",
          stagger: 0.04,
          scrollTrigger: onView(el, "top 92%"),
        });
      });

      /* ---------- number count-ups ---------- */
      q("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const original = el.textContent;
        const counter = { v: 0 };
        const render = () => {
          el.textContent = prefix + counter.v.toFixed(decimals) + suffix;
        };
        render();
        gsap.to(counter, {
          v: end,
          duration: 2.2,
          ease: "expo.out",
          onUpdate: render,
          scrollTrigger: onView(el, "top 92%"),
        });
        cleanups.push(() => {
          el.textContent = original;
        });
      });

      /* ---------- oversized words sliding sideways with scroll ---------- */
      q("[data-scrub-x]").forEach((el) => {
        const [from, to] = el.dataset.scrubX.split(",").map(Number);
        gsap.fromTo(
          el,
          { xPercent: from },
          {
            xPercent: to,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      /* ---------- scroll-driven rotation ---------- */
      q("[data-spin]").forEach((el) => {
        gsap.to(el, {
          rotation: parseFloat(el.dataset.spin) || 360,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
      });

      q('[data-reveal="clip"]').forEach((el) => {
        const img = el.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: onView(el) });
        tl.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
        );
        if (img) tl.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.1);
      });

      q('[data-reveal="line"]').forEach((el) => {
        gsap.fromTo(el, { scaleX: 0 }, {
          scaleX: 1,
          transformOrigin: "0% 50%",
          duration: 1.4,
          ease: "expo.inOut",
          scrollTrigger: onView(el, "top 92%"),
        });
      });

      /* ---------- split headlines ---------- */
      q("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "lines,words",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.fromTo(self.lines, { yPercent: 110, rotate: 2 }, {
              yPercent: 0,
              rotate: 0,
              transformOrigin: "0% 100%",
              duration: 1.25,
              ease: "expo.out",
              stagger: 0.1,
              scrollTrigger: onView(el),
            }),
        });
      });

      /* ---------- scroll-scrubbed reading highlight ---------- */
      q("[data-scrub-words]").forEach((el) => {
        SplitText.create(el, {
          type: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.fromTo(
              self.words,
              { opacity: 0.18 },
              {
                opacity: 1,
                ease: "none",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  end: "bottom 50%",
                  scrub: true,
                },
              },
            ),
        });
      });

      /* ---------- parallax ---------- */
      q("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        gsap.fromTo(
          el,
          { yPercent: speed * 100 },
          {
            yPercent: -speed * 100,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      /* ---------- career timeline: a light that travels down the rail ----------
         The orb starts on the first experience's dot and rides all the way to
         the bottom end of the rail as you scroll; the track fills behind it
         and every dot it passes lights up. Re-measured on every refresh. */
      const timelineCleanups = [];
      q("[data-timeline]").forEach((el) => {
        const items = q("[data-timeline-item]", el);
        const orb = el.querySelector("[data-timeline-orb]");
        const track = el.querySelector("[data-timeline-track]");
        const fill = el.querySelector("[data-timeline-fill]");
        const rail = el.querySelector("[data-timeline-rail]");
        if (!items.length || !orb) return;

        // centre of each dot, relative to the timeline container
        const centers = () => items.map((it) => it.offsetTop + 12);
        // where the orb stops: the bottom end of the rail (or the last dot)
        const railEnd = () => (rail ? rail.offsetTop + rail.offsetHeight : centers().at(-1));
        let c = centers();
        let endY = railEnd();

        const layout = () => {
          c = centers();
          endY = railEnd();
          if (track) {
            track.style.top = `${c[0]}px`;
            track.style.height = `${endY - c[0]}px`;
          }
        };
        layout();
        ScrollTrigger.addEventListener("refreshInit", layout);
        timelineCleanups.push(() => ScrollTrigger.removeEventListener("refreshInit", layout));

        const light = (y) => {
          items.forEach((it, i) => it.classList.toggle("is-active", c[i] <= y + 2));
        };

        gsap.set(orb, { y: c[0] - 12 });
        light(c[0]);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          // runs after each render, so it reads the orb's actual position
          onUpdate: () => light(gsap.getProperty(orb, "y") + 12),
          scrollTrigger: {
            trigger: el,
            start: () => `top+=${c[0]} 55%`,
            end: () => `top+=${endY} 55%`,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        tl.fromTo(orb, { y: () => c[0] - 12 }, { y: () => endY - 12 }, 0);
        if (fill) tl.fromTo(fill, { scaleY: 0 }, { scaleY: 1, transformOrigin: "50% 0%" }, 0);
      });

      return () => timelineCleanups.forEach((fn) => fn());
    });

    /* ---------- horizontal project gallery (desktop) ----------
       The section is stretched so its sticky stage stays on screen while the
       track travels sideways; images drift inside their cards as they pass. */
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const off = [];
      gsap.utils.toArray("[data-hscroll]").forEach((section) => {
        const viewport = section.querySelector("[data-hscroll-viewport]");
        const track = section.querySelector("[data-hscroll-track]");
        const progress = section.querySelector("[data-hscroll-progress]");
        const counter = section.querySelector("[data-hscroll-counter]");
        const imgs = gsap.utils.toArray(section.querySelectorAll("[data-hscroll-img]"));
        if (!viewport || !track) return;

        section.classList.add("is-hscroll");
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        const size = () => {
          section.style.height = `${window.innerHeight + distance()}px`;
        };
        size();
        ScrollTrigger.addEventListener("refreshInit", size);

        const range = { trigger: section, start: "top top", end: "bottom bottom" };
        const move = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            ...range,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!counter) return;
              const n = imgs.length;
              counter.textContent = String(Math.min(n, Math.floor(self.progress * n) + 1)).padStart(2, "0");
            },
          },
        });

        if (progress) {
          gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { ...range, scrub: 0.6 } });
        }

        imgs.forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -6 },
            {
              xPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("a"),
                containerAnimation: move,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });

        off.push(() => {
          ScrollTrigger.removeEventListener("refreshInit", size);
          section.classList.remove("is-hscroll");
          section.style.height = "";
        });
      });
      return () => off.forEach((fn) => fn());
    });

    /* ---------- pointer-driven effects (fine pointers only) ---------- */
    mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const magnets = gsap.utils.toArray("[data-magnetic]");
      const handlers = magnets.map((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const strength = parseFloat(el.dataset.magnetic) || 0.3;
        const move = (e) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * strength);
          yTo((e.clientY - (r.top + r.height / 2)) * strength);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });

      // 3D tilt toward the pointer
      const tilts = gsap.utils.toArray("[data-tilt]").map((el) => {
        const max = parseFloat(el.dataset.tilt) || 8;
        gsap.set(el, { transformPerspective: 1000 });
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3.out" });
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3.out" });
        const move = (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          ry(px * max * 2);
          rx(-py * max * 2);
        };
        const leave = () => {
          rx(0);
          ry(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });

      return () => [...handlers, ...tilts].forEach((off) => off());
    });

    /* Gallery counter while swiping natively (mobile / reduced motion). */
    document.querySelectorAll("[data-hscroll]").forEach((section) => {
      const viewport = section.querySelector("[data-hscroll-viewport]");
      const counter = section.querySelector("[data-hscroll-counter]");
      const cards = [...section.querySelectorAll("[data-hscroll-img]")].map((img) => img.closest("a"));
      if (!viewport || !counter || !cards.length) return;
      const onSwipe = () => {
        if (section.classList.contains("is-hscroll")) return;
        const x = viewport.scrollLeft + 8;
        let current = 0;
        cards.forEach((card, i) => {
          if (card.offsetLeft - cards[0].offsetLeft <= x) current = i;
        });
        counter.textContent = String(current + 1).padStart(2, "0");
      };
      viewport.addEventListener("scroll", onSwipe, { passive: true });
      cleanups.push(() => viewport.removeEventListener("scroll", onSwipe));
    });

    /* Glow cards: cursor-tracking border light (pure CSS vars, always on). */
    const glow = (e) => {
      const card = e.target.closest?.(".glow-card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", glow, { passive: true });
    cleanups.push(() => document.removeEventListener("pointermove", glow));

    /* Layout keeps shifting after mount (fonts, images, client widgets), so
       re-measure every trigger whenever the page height actually changes. */
    const refresh = () => ScrollTrigger.refresh();
    let lastHeight = document.body.scrollHeight;
    let refreshTimer;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastHeight) < 2) return;
      lastHeight = h;
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(refresh, 150);
    });
    ro.observe(document.body);
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    cleanups.push(() => {
      ro.disconnect();
      clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      mm.revert();
    };
  }, []);

  return null;
};

export default MotionDirector;
