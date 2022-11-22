If you want the component work client side, when you create the build,
change the import from ./dist/clock-element.js file.

import ... from "lit"

to:

import ... from "./lit-core-min.js"