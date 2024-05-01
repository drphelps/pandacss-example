import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  hash: true,

  // Whether to use css reset
  preflight: true,

  // Prevent the use of custom or raw CSS values
  strictTokens: false,

  // Generate a JSX runtime to pass CSS properties to components as props
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Custom callbacks that you can hook into for advanced use cases
  hooks: {
    // Prefix token names to agree with legacy Stitches format, e.g. $blue, $1
    "tokens:created": ({ configure }) => {
      configure({
        formatTokenName: (path) => `$${path.join("-")}`,
      });
    },
  },
});
