window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('serviceWorker registed.')
      })
      .catch(error => {
        console.warn('serviceWorker error.', error)
      })
  }
})
