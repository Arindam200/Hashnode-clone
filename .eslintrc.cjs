module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: ["doublequotes"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {},
};
