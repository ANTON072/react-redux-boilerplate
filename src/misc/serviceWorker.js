if (process.env.NODE_ENV !== 'development') {
  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('serviceWorker registed.')
        })
        .catch(error => {
          console.warn('serviceWorker error.', error)
        })
    }
  })
}
