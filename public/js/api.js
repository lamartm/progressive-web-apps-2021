const fetch = require('node-fetch')

async function getData(data) {
    const apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
    const apiKey = '&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs'

    let getDateData = await fetch(apiURL + data + '/latest_photos?' + apiKey)
    
    const getDateDataJson = await getDateData.json()
    const maxDateData = getDateDataJson.latest_photos[0].sol

    let selectedEndpoint = await fetch(apiURL + data + '/photos?sol=' + maxDateData + apiKey)
    const selectedEndpointJson = await selectedEndpoint.json()
    
    return (selectedEndpointJson.photos.map(filterData))
}

function filterData(data) {
    return {id: data.id, sol: data.sol, camera: data.camera.full_name, img_src: data.img_src, earth_date: data.earth_date, rover: data.rover.name}
}

module.exports = {getData}