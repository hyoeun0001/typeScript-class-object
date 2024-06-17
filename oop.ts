class Employee {

    constructor(
        private _empName : string, 
        private _age : number, 
        private _empJob : string
    ){}

    get empName(){
        return this._empName;
    }

    set empName(val : string){
        this._empName=val;
    }

    printEmp=(): void =>{
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
    }
}

let employee1 = new Employee('kim', 30, '개발자');
employee1.empName = 'choi'
employee1.printEmp();