module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        parser: "flow",
      },
    ],
  },
};
