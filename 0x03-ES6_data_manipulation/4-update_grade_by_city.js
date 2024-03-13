export default function updateStudentGradeByCity(array, city, newGrades) {
  const arrayToUpdate = array.filter((item) => item.location === city);
  const updatedArray = arrayToUpdate.map((item) => {
    for (const grade of newGrades) {
      if (item.id === grade.studentId) {
        /* eslint-disable no-param-reassign */
        item.grade = grade.grade;
      }
    }
    if (!item.grade) {
      item.grade = 'N/A';
    }
    return item;
  });
  return updatedArray;
}
