var score,question1,question2,question3,questions,input,randomQuestion,randomNumber;


function Question(question, option, answer) {
    this.question = question;
    this.option = option;
    this.answer = answer;
};

Question.prototype.loopOption = function() {
    for (var i = 0; i < this.option.length; i ++) {
        console.log(this.option[i]);
    }
};

var option1 = ["1.   Java Scropt","2. Java Song","3. Java Soldier"];
question1 = new Question("What is JS?",option1,1);

var option2 = ["1. AIDS","2. HBO","3. HTML"];
question2 = new Question("What is a computer language?",option2,3);

var option3 = ["1. HTML","2. CSS","3. Both"];
question3 = new Question("What is for web develop?",option3,3);

questions = [question1, question2, question3];
score = 0;


do {
    randomNumber = Math.floor(Math.random() * 3);
    randomQuestion = questions[randomNumber];

    console.log("Your score is " + score + ". Keep going!");
    randomQuestion.loopOption();
    input = prompt(randomQuestion.question);
    if( input == randomQuestion.answer ) {
        score++;
    }

} while ( input.toLowerCase() != "exit");


//
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
//
// Person.prototype.calculateAge = function() {
//     console.log(2017 - this.yearOfBirth);
// };
//
//
//
// var john = new Person('John', 1992, 'teacher');
//
// john.calculateAge();
//
//
// var personProto = {
//     calculateAge : function() {
//         console.log( 2017 - this.yearOfBirth)
//     }
// };
//
//
// var luke = Object.create(personProto, {
//     name: { value: 'Luke'},
//     yearOfBirth: { value: 1991},
//     job: { value: 'designer'}
// });
//
// luke.calculateAge();
//
//
// // 206.9 - (0.67 * el)
//
// var years = [1992, 1986, 1975, 1940];
//
// function arrayCalc(el, fn) {
//     var arrayRes = [];
//     for (var i = 0; i < el.length; i ++) {
//         arrayRes.push(fn(el[i]));
//     }
//     return arrayRes;
// }
//
// function calcAge(el) {
//     return 2017 - el;
// }
//
// function maxHeartBeat(el) {
//     if (el >= 18 && el <= 65) {
//         return 206.9 - (0.67 * el);
//     } else {
//         return -1;
//     }
// }
//
// var ages = arrayCalc(years, calcAge);
// var maxHeartBeat = arrayCalc(ages, maxHeartBeat);
// console.log(maxHeartBeat);
//
// function interview(job) {
//     switch (job) {
//         case 'teacher':
//             return function(name) {
//                 console.log("What do you teach," + name + "?");
//             }
//             break
//
//         case 'designer':
//             return function(name) {
//                 console.log("What is UX ? " + name)
//             }
//             break
//
//         default:
//             return "What is your job?";
//     }
// }
//
// interview("teacher")("Neven");
//
//
// //IIFE
// (function (luck) {
//     var score = Math.random() * 10;
//     console.log( score > 5 - luck ? "Good luck!": "Bad luck...");
// })(4);

