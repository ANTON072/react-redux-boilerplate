module.exports = {
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel'
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
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs'
      ]
    }
  }
}
