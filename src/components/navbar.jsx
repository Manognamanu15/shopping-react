import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="flex justify-between p-4">
        <svg
          className="w-6 h-6"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="719.000000pt"
          height="1280.000000pt"
          viewBox="0 0 719.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M3845 12794 c-11 -2 -636 -83 -1390 -179 -753 -97 -1388 -181 -1410
-186 -319 -84 -591 -568 -636 -1134 -10 -119 -392 -9478 -406 -9910 -10 -336
44 -600 164 -804 47 -80 143 -178 208 -213 60 -32 1306 -356 1401 -365 162
-15 354 107 489 308 138 206 238 504 265 789 6 63 38 781 71 1594 32 814 60
1481 62 1482 3 3 531 73 533 70 1 0 293 -685 649 -1521 390 -918 664 -1548
691 -1591 55 -89 139 -173 207 -207 53 -27 1298 -353 1387 -364 96 -11 226 36
328 120 165 136 309 393 382 683 84 334 79 729 -13 999 -13 39 -266 638 -562
1333 l-538 1263 115 117 c490 501 897 1298 1128 2207 140 552 206 1041 217
1630 15 761 -88 1435 -312 2050 -255 699 -676 1214 -1157 1415 -64 26 -309 94
-773 213 -374 96 -705 180 -735 187 -55 12 -327 23 -365 14z m596 -2764 c301
-599 271 -1564 -70 -2265 -170 -349 -413 -611 -649 -698 -75 -28 -155 -40
-690 -108 -139 -17 -254 -30 -256 -28 -6 7 117 2994 124 3002 7 8 1431 196
1469 194 20 -2 33 -18 72 -97z"
            />
          </g>
        </svg>

        <h1 className="text-blue-500 font-bold">THE RUNWAY</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
    </>
  );
}

export default NavBar;
