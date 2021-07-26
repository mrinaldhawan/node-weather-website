// mapbox API_KEY
// pk.eyJ1IjoiZGhhd2FubXJpbmFsIiwiYSI6ImNrcmFkbm93ejRpMTYzMW82bnpteHh4ejcifQ.wZbFvfo6DxLHg__2kDEDvw
// http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGhhd2FubXJpbmFsIiwiYSI6ImNrcmFkbm93ejRpMTYzMW82bnpteHh4ejcifQ.wZbFvfo6DxLHg__2kDEDvw


const request = require('request')

const geocode = (address, callback) => {
  const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGhhd2FubXJpbmFsIiwiYSI6ImNrcmFkbm93ejRpMTYzMW82bnpteHh4ejcifQ.wZbFvfo6DxLHg__2kDEDvw&limit=1'

  request({url : url, json : true}, (error,response) => {
    if (error) {
      callback('Unable to connect to geolocation service', undefined)
    }
    else if (response.body.features.length === 0) {
     callback('Unable to find location. Try another search', undefined)
    }
    else {
      callback(undefined, {
        longitude : response.body.features[0].center[0],
        latitude : response.body.features[0].center[1],
        location : response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
