let year: number;
let greeting:string;
let ex:string = '!';
let yes: boolean = true;
let no: boolean = false;
let sample: string;
let _sym1 = Symbol('hello');
let _sym2 = Symbol('hello');
let _exp1 = undefined;
let _exp2 = null;


year = 2020;
greeting = 'Hello Typescript ';

sample = greeting + year + ex;

console.log(sample);

function test(){
    if(_sym1 != _sym2){
        return(yes);
    }else{
        return(no);
    }  
}

console.log(test());

const obj = {name:'Typescript', paradigm:'object oriented', developer:'Microsoft'}

console.log(obj.name + ' is an ' + obj.paradigm + ' programming language developed by ' + obj.developer + '.');


