const groupAdultsByAgeRange = (arrayOfPeopleObjects) => {
  //const peopleGroupedByAge = {}
  
  const grouping = arrayOfPeopleObjects.reduce((resultObject, currentObject) => {
    resultObject = {
      '20 and younger': []
    }
    if(currentObject.age < 20){
      resultObject['20 and younger'].push(currentObject)
    }
    
    return resultObject
  })
  return grouping
  
}

console.log(groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 19}]))

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange