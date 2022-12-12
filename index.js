// Declare a function createEmployeeRecord and pass in  employee details as arguments.
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  const employeeObj = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeObj;
}

// Create a new array by calling the function createEmployeeRecord and mapping it's elements.
function createEmployeeRecords(newCreatedEmployeeRecords) {
  return newCreatedEmployeeRecords.map(createEmployeeRecord);
}

// Calculate the employee entry date and time.
function createTimeInEvent(dateTimeOfWorking) {
  let dateAndTimeRecords = {
    type: "TimeIn",
    hour: parseInt(dateTimeOfWorking.slice(-4), 10),
    date: dateTimeOfWorking.slice(0, 10),
  };
  this.timeInEvents.push(dateAndTimeRecords);
  //   Return the updated record.
  return this;
}

// Return the updated record
function createTimeOutEvent(dateTimeOfWorking) {
  let dateAndTimeRecords = {
    type: "TimeOut",
    hour: parseInt(dateTimeOfWorking.slice(-4), 10),
    date: dateTimeOfWorking.slice(0, 10),
  };
  this.timeOutEvents.push(dateAndTimeRecords);
  return this;
}

// Calculate the hours worked by an employee.
function hoursWorkedOnDate(dateTimeOfWorking) {
  let entryTime;
  let exitTime;
  entryTime = this.timeInEvents.find(
    (event) => event["date"] === dateTimeOfWorking
  );
  exitTime = this.timeOutEvents.find(
    (event) => event["date"] === dateTimeOfWorking
  );
  return (exitTime.hour - entryTime.hour) / 100;
}
// Return employee pay.
function wagesEarnedOnDate(dateTimeOfWorking) {
  return hoursWorkedOnDate.call(this, dateTimeOfWorking) * this.payPerHour;
}

// Loop through the employeeRecords and return a matching employee record or undefined.
// Test the firstName field for a match with the FirstName argument.
function findEmployeeByFirstName(employeeRecords, firstName) {
  return employeeRecords.find((record) => record.firstName === firstName);
}
// Return total pays/salaries for all employees
function calculatePayroll(employeePayroll) {
  const salary = employeePayroll.reduce((account, employee) => {
    return account + allWagesFor.call(employee);
  }, 0);
  return salary;
}

// Return sum of pay owed to one employee for all dates, as a number
const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  /*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
