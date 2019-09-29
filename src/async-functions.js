const getTatooineResidents = () => {
  const fetch = require("node-fetch")
  const promise = fetch('https://swapi.co/api/planets/1/')
  
  return promise
    .then(response => response.json())
    .then(data => data.residents)
    .catch(error => console.log(error))
}

getTatooineResidents()

module.exports.getTatooineResidents = getTatooineResidents