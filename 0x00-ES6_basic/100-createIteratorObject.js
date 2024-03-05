export default function createIteratorObject(report) {
  const employeesObj = report.allEmployees

  employeesObj[Symbol.iterator] = () => {
    let employeesByDept = Object.values(employeesObj);
    let employeeIndex = 0;
    let deptIndex = 0;

    return {
      next() {
        if (employeeIndex >= employeesByDept[deptIndex].length) {
          deptIndex++;
          employeeIndex = 0;
        }

        if (deptIndex >= employeesByDept.length) {
          return { value: undefined, done: true };
        }

        return {
          value: employeesByDept[deptIndex][employeeIndex++],
          done: false
        }
      }
    }
  }
  return employeesObj;
}
