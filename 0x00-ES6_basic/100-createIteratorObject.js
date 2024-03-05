export default function createIteratorObject(report) {
	const namesOfEmployees = [];
	for (const value of Object.values(report.allEmployees)) {
		for (const name of value) {
			namesOfEmployees.push(name);
		}
	}
	return namesOfEmployees
}
