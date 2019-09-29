const groupAdultsByAgeRange = (people) => {

  const groupPeopleByAge = people.reduce((resultObject, currentObject) => {
    if(currentObject.age < 18) {
      console.log(currentObject.name, "is not old enough")
    }
    else if(currentObject.age < 21) {
      if(resultObject['20 and younger'] === undefined){
      resultObject['20 and younger'] = [currentObject]
      }
      else {
        resultObject['20 and younger'].push(currentObject)
      }
    }
    else if (currentObject.age < 31) {
      if(resultObject['21-30'] === undefined){
      resultObject['21-30'] = [currentObject]
      }
      else {
        resultObject['21-30'].push(currentObject)
      }
    }
    else if (currentObject.age < 41) {
      if(resultObject['31-40'] === undefined){
      resultObject['31-40'] = [currentObject]
      }
      else {
        resultObject['31-40'].push(currentObject)
      }
    }
    else if (currentObject.age < 51) {
      if(resultObject['41-50'] === undefined){
      resultObject['41-50'] = [currentObject]
      }
      else {
        resultObject['41-50'].push(currentObject)
      }
    }
    else if (currentObject.age > 50) {
      if(resultObject['51 and older'] === undefined){
      resultObject['51 and older'] = [currentObject]
      }
      else {
        resultObject['51 and older'].push(currentObject)
      }
    }
    return resultObject
  }, resultObject = {})

  return groupPeopleByAge

}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange



