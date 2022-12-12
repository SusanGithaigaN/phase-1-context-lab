
// Declare a function createEmployeeRecord and pass in  employee details as arguments.
// Populate myObj keys with respective values.
// Initialize timeInEvents and timeOutEvents to hold an empty array.
function createEmployeeRecord([firstName, familyName, title, payPerHour, timeInEvents, timeOutEvents]){
    const myObj={
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [], 
        timeOutEvents: []
    }
    return myObj
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

