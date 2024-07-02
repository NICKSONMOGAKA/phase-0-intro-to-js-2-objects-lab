const { expect } = require('chai');
const {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
} = require('../index.js');

describe('employees', () => {
  let employee;

  beforeEach(() => {
    employee = { name: 'Betty', role: 'Cashier' };
  });

  describe('updateEmployeeWithKeyAndValue(employee, key, value)', () => {
    it('returns an employee with the original key value pairs and the new key value pair', () => {
      const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'title', 'Manager');
      expect(updatedEmployee).to.deep.equal({ name: 'Betty', role: 'Cashier', title: 'Manager' });
      expect(employee).to.deep.equal({ name: 'Betty', role: 'Cashier' });
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', () => {
    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', () => {
      const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'role', 'Manager');
      expect(updatedEmployee).to.deep.equal({ name: 'Betty', role: 'Manager' });
      expect(employee).to.deep.equal({ name: 'Betty', role: 'Manager' });
    });
  });

  describe('deleteFromEmployeeByKey(employee, key)', () => {
    it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', () => {
      const updatedEmployee = deleteFromEmployeeByKey(employee, 'role');
      expect(updatedEmployee).to.deep.equal({ name: 'Betty' });
      expect(employee).to.deep.equal({ name: 'Betty', role: 'Cashier' });
    });

    it('does not modify the original employee (it is non-destructive)', () => {
      deleteFromEmployeeByKey(employee, 'role');
      expect(employee).to.deep.equal({ name: 'Betty', role: 'Cashier' });
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', () => {
    it('returns employee without the deleted key/value pair', () => {
      const updatedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'role');
      expect(updatedEmployee).to.deep.equal({ name: 'Betty' });
    });

    it('modifies the original employee', () => {
      destructivelyDeleteFromEmployeeByKey(employee, 'role');
      expect(employee).to.deep.equal({ name: 'Betty' });
    });
  });
});
