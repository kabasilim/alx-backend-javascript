interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'Ghana'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 20,
  location: 'Kenya'
};

const array: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

array.forEach((student) => {
  const row = document.createElement('tr');
  table.appendChild(row);
  const data1 = document.createElement('td');
  const data2 = document.createElement('td');
  row.appendChild(data1);
  row.appendChild(data2);
  data1.textContent = student.firstName;
  data2.textContent = student.location;
})
