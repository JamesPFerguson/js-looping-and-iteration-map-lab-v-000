// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver)
   { return driver.toLowerCase()});
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    nameArr = driver.split(" ")
    let fName = nameArr[0]
    let lName = nameArr[1]
    return {
      firstName: fName;
      lastName: lName;
    }
  })
}
