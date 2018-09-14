- ReduxはDucksに沿った記述内容で書きましょう。
- reducer, action, sagaを1枚のファイルにまとめます。
- 非同期処理は `redux-saga` を利用しましょう。
- storeは `immer` を利用して immutable に扱いましょう。
- actionは `redux-actions` を利用して書きましょう。
- store構造はあまり深くならないように、必要に応じて `normalizr` を利用しましょう。

https://github.com/erikras/ducks-modular-redux
