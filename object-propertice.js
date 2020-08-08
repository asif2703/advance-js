const students = [
    {id:20, name: 'Serali Babu'},
    {id:21, name: 'Anali Babu'},
    {id:40, name: 'Kerali Babu'},
    {id:50, name: 'Derali Babu'},
]
output =[];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = element.name;
    output.push(result);
}
console.log(output);

const result2 = students.map(s => s.name);
const id = students.map( s => s.id);
const biggerId = students.filter(s => s.id > 40);
const OneId = students.find( s => s.id < 40);
console.log(OneId);
console.log(biggerId);
console.log(id);
console.log(result2);