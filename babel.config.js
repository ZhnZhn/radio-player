module.exports = {
  presets: [
    "@babel/preset-typescript", 
    ['@babel/preset-env', { loose: true }],
    ['@babel/preset-react', { "runtime": "automatic" }]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};