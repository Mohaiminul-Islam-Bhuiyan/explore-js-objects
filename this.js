console.log(this)
const kodom = {
    name: 'kodom',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this)
        return this.name + 'is participaitong in an exam';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this)
        }
        arrow();
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
kodom.exam()

const badamAli = {
    name: 'kacha badam ali',
    money: 8000
}

badamAli.exam = kodom.exam;
badamAli.exam()

function clickHandler(){
    console.log('inside click handler', this)
}

document.getElementById('Click-2').addEventListener('click', function(){
    console.log(this)
})