export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, value) => accumulator + value.id, 0);
}
