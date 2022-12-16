import request from "utils/request";



const getWeather = function(test: string): any {
  console.log(test, typeof test)
  return request({
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/future.json',
    params: { q: 'London', dt: '2022-12-25' },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  })
}

export default {}

export {
  getWeather
  //...other functions
}