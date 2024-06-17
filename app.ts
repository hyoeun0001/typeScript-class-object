//변수의 데이터 타입 명시
let stdId : number = 1111;
let stdName : string = 'lee';
let age : number = 20;
let gender : string = 'male';
let course : string = 'Tupescript';
let completed : boolean= false;

//열거형 : 사용자 정의 타입
enum GenderType{
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'nue'
}

    interface Student {
        stdId : number;
        stdName? : string;
        age? : number;
        gender? : 'male' | 'female';
        course? : string;
        completed? : boolean;
        setName? : (name : string)=>void;
    }

class MyStudent implements Student{
    stdId= 10003;
    stdName= "lee";
    age= 20;
    gender : 'male' | 'female'= 'male';
    course= "javascript";
    completed= true;
    setName(name: string) : void{
        this.stdName = name;
        console.log('이름 설정 : '+ this.stdName);
    }
}
const myInstance = new MyStudent();
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

let std ={
        stdId: 10003,
        stdName: "lee",
        age: 20,
        gender: "female",
        course: "javascript",
        completed: true
}
function setInfo(student : Student):void{
    console.log(student)
}
// setInfo(std);
//console.log(getInfo(5678));

//함수의 데이터 타입 명시(매개변수, 리턴 타입)
function Plus(a : number , b : number): number{
    return a+b;
}


type strOrNum = number | string
let numStr : strOrNum = 100;
let item : number;

function convertToString(val : strOrNum ): string{
    if (typeof val === 'string'){
        item = 0;
    }else{
        item = val;
    }
    return String(val);
}
function convertToNumber(val : strOrNum ): number{
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

let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
for(let i = 0;i < mixedArray.length;i++){
    console.log(mixedArray[i]);
}

let greeting : [number, string, boolean]=[1, 'hello',true];

for(let i = 0;i < greeting.length;i++){
    console.log(greeting[i]);
}

