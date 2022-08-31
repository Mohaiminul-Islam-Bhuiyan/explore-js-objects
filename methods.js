const student = {
    name: 'kodom',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participaitong in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking exam on ${subject}`
    },
    treatDe: function(amount, tip = 0){
        this.money = this.money - amount - tip;
        return this.money;
    }
}
const output = student.exam()
// console.log(output)
const reExam = student.improveExam('algebra')
// console.log(reExam)
const remaining = student.treatDe(900, 100)
console.log(remaining);
const dolaRemaining = student.treatDe(500)
console.log(dolaRemaining)