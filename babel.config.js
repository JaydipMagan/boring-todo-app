module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "@babel/plugin-transform-modules-commonjs",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components/index.ts",
            "@navigation": "./src/navigation/index.ts",
          },
        },
      ],
    ],
  };
};
