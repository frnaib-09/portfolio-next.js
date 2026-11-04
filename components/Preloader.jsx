"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2600);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 3100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${exiting ? "preloader-exit" : ""}`}>
      <div className="preloader-logo">
        <svg
          viewBox="40 10 370 220"
          className="fr-logo"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* F - Top Bar */}
          <path
            pathLength="1"
            className="logo-part logo-top"
            d="
              M302 22 L116 22 L111 25 L110 24
              L108 27 L107 26 L103 31 L100 32
              L99 36 L94 41 L95 42 L92 44
              L84 58 L82 59 L82 62 L84 61
              L256 63 L267 58 Z
            "
          />

          {/* F - Main Shape */}
          <path
            pathLength="1"
            className="logo-part logo-f"
            d="
              M241 83 L127 82 L113 87 L112 86
              L100 97 L101 98 L94 109 L91 119
              L87 125 L87 129 L84 133 L85 134
              L82 137 L82 140 L67 173 L67 177
              L64 179 L62 188 L59 193 L60 194
              L56 199 L57 201 L54 207 L55 208
              L60 202 L71 195 L86 181 L91 179
              L92 176 L105 167 L119 154 L120 149
              L122 148 L122 145 L125 141 L124 140
              L126 138 L126 135 L129 131 L129 127
              L133 123 L178 122 L198 124 L209 114
              L210 115 L209 114 L223 100 L226 99 Z
            "
          />

          {/* R - Main Curve */}
          <path
            pathLength="1"
            className="logo-part logo-r"
            d="
              M254 94 L255 97 L342 97 L344 100
              L347 101 L346 102 L350 109 L350 115
              L338 126 L325 129 L321 128 L320 130
              L332 140 L335 145 L338 146 L344 153
              L348 155 L354 155 L367 149 L381 136
              L380 135 L387 126 L385 125 L388 120
              L388 114 L390 111 L388 99 L389 95
              L383 81 L378 76 L379 75 L373 69
              L371 69 L366 64 L360 62 L359 60
              L358 61 L353 58 L347 58 L345 56
              L295 56 L287 61 L283 66 L282 65
              L283 66 L280 70 L276 72 L275 75
              L269 79 Z
            "
          />

          {/* White Cut */}
          <path
            pathLength="1"
            className="logo-part logo-cut"
            d="
              M243 126 L246 133 L248 134
              L274 177 L277 173 L276 172
              L281 152 L298 140 L311 133 Z
            "
          />

          {/* R - Bottom Bullet */}
          <path
            pathLength="1"
            className="logo-part logo-bullet"
            d="
              M285 153 L282 159 L279 174 L280 178
              L287 185 L287 187 L290 187 L299 196
              L298 197 L299 196 L319 216 L390 216
              L379 206 L373 198 L368 196 L362 189
              L354 183 L352 179 L337 167 L328 158
              L329 157 L308 139 L305 139 Z
            "
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
