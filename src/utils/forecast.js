const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4a1fb58dae9900503a1feeed0fca5424/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'
    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect to weather service!')
        }else if(body.error){
            callback('Unable to find location.')
        }else{
            callback(undefined, body.daily.data[0].summary+' It is currently '+body.currently.temperature+' out. The high today is '+body.daily.data[0].temperatureHigh+' with a low of '+body.daily.data[0].temperatureLow+'. There is a '+(body.currently.precipProbability*100)+'% chance of rain.')
        }
    })
}

module.exports = forecast