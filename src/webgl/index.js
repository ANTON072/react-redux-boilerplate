class Webgl {
  constructor() {}

  initialize(store, actions) {
    console.log('store:', store)
    console.log('actions:', actions)
  }

  update(store) {
    console.log(store)
  }
}

export default new Webgl()
