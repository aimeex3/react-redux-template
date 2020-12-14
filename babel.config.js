module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-classes',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    'lodash',
  ],
  env: {
    test: {
      retainLines: true,
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
