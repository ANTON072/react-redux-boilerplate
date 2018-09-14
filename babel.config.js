module.exports = {
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions']
        },
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react'
  ]
};
