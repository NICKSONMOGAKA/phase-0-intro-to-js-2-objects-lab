// Write your solution in this file!
exports.updateEmployeeWithKeyAndValue = function(employee, key, value) {
    return { ...employee, [key]: value };
  };
  
  exports.destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value) {
    employee[key] = value;
    return employee;
  };
  
  exports.deleteFromEmployeeByKey = function(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  };
  
  exports.destructivelyDeleteFromEmployeeByKey = function(employee, key) {
    delete employee[key];
    return employee;
  };
  