const kodom = {
    name: 'kodom',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participaitong in an exam';
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

const result = kodom.exam()
console.log(result)

const badamAli = {
    name: 'kacha badam',
    money: 8000
}

const result2 = kodom.exam.call(badamAli);
console.log(result2)

const badamMoney = kodom.treatDe.call(badamAli, 400, 70)
console.log(badamMoney);

const badamMoney2 = kodom.treatDe.apply(badamAli, [1000, 100])
console.log(badamMoney2)

const badamAliTreat = kodom.treatDe.bind(badamAli);
const remaining = badamAliTreat(1000, 100)
console.log(remaining);