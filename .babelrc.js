module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ],
}
