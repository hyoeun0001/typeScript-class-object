//변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Tupescript';
var completed = false;
//열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "nue";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 10003;
        this.stdName = "lee";
        this.age = 20;
        this.gender = 'male';
        this.course = "javascript";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
// myInstance.setName('엘리스');
// function getInfo(id: number): Student {
//     return {
//         stdId: id,
//         stdName: "lee",
//         age: 20,
//         gender: "female",
//         course: "javascript",
//         completed: true
//     };
// }
var std = {
    stdId: 10003,
    stdName: "lee",
    age: 20,
    gender: "female",
    course: "javascript",
    completed: true
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
//console.log(getInfo(5678));
//함수의 데이터 타입 명시(매개변수, 리턴 타입)
function Plus(a, b) {
    return a + b;
}
var numStr = 100;
var item;
function convertToString(val) {
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
// console.log(convertToString(numStr));//숫자
// console.log(convertToNumber(numStr));//문자열
// let numbers : number[] = [1,2,3,4,5];
// let fruits : string[]=['apple','banana','orange'];
// for(let i = 0;i < numbers.length;i++){
//     console.log(numbers[i]);
// }
// for(let i = 0;i < fruits.length;i++){
//     console.log(fruits[i]);
// }
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
