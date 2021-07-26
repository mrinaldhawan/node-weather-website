// weatherstack ACCESS_KEY
// 46c07819daa666ad90b54c10a9ba553f
// http://api.weatherstack.com/current?access_key=46c07819daa666ad90b54c10a9ba553f&query=37.8267,-122.4233


const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=46c07819daa666ad90b54c10a9ba553f&query=' + latitude + ',' + longitude

  request({url : url, json : true}, (error,response) => {
    if(error) {
      callback('Unable to connect to forecast API. Please try later.', undefined)
    }
    else if(response.body.error) {
      callback('Unable to find forecast for the location')
    }
    else {
      callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out')
    }
  })
}

module.exports = forecast