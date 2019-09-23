import axios from 'axios'

export default axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    (data, headers) => {
      const resultData = data ? data : {}
      if (!resultData.hasOwnProperty('authenticity_token')) {
        const csrf_token = process.env.RAILS_ENV !== 'test'
          ? document.querySelector('meta[name="csrf-token"]').content
          : null
        resultData['authenticity_token'] = csrf_token
      }
      return JSON.stringify(resultData)
    }
  ]
})
