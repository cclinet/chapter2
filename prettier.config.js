module.exports = {
  trailingComma: "all",
  importOrderSeparation: true,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@(.*?)/(.*)$",
    "^[./]",
  ],
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
