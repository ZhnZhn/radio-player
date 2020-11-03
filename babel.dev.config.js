module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }],
    ['@babel/preset-react', { "runtime": "automatic" }]
  ],
  plugins: [
    ['react-refresh/babel'],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};
