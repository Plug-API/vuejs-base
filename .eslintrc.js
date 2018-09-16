module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended" // Pode ser usado "@vue/prettier" para não validar formatação
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
