/* Replica of Cheatsheet with slight modification
* Generate tsconfig.json using === tsc --init
* Compile cheatsheet.ts to generate the js file using "tsc" command
* Run on the console with === node cheatsheet.js
*/

const attributes: Array<string> = ['type', 'keyword', 'is primitive', 'sample'];

var space_attr:string = '';
for(let i=0; i< attributes.length; ++i){
    //add space in between
    space_attr += attributes[i] + '       ';
}
console.log(space_attr);
/*######################################### */

//Number
interface NumberGroup {
   name: string; keyword: string; is_primitive: string; sample: string

}

interface EnumNumberGroup extends Array<NumberGroup>{}


const result_number:EnumNumberGroup = [
    { name:'number', keyword: 'none', is_primitive: 'yes', sample: 'const x = 5;'},
];

result_number.forEach(object => console.log(object.name + '     ' + object.keyword + '          '+ object.is_primitive + '                ' + object.sample));

/*######################################### */

//String
interface StringGroup{
    name: string; keyword: string; is_primitive: string; sample: string
 
 }
 
 interface EnumStringGroup extends Array<StringGroup>{}
 
 
 const result_string:EnumStringGroup = [
     { name:'string', keyword: '""', is_primitive: 'yes', sample: 'const x = "Hi";'},
 ];
 
 result_string.forEach(object => console.log(object.name + '     ' + object.keyword + '            '+ object.is_primitive + '                ' + object.sample));

 /*######################################### */

//Boolean
interface BooleanGroup{
    name: string; keyword: string; is_primitive: string; sample: string
 
 }
 
 interface EnumBooleanGroup extends Array<BooleanGroup>{}
 
 
 const result_boolean:EnumStringGroup = [
     { name:'boolean', keyword: '', is_primitive: 'yes', sample: 'const x = true;'},
 ];
 
 result_boolean.forEach(object => console.log(object.name + '     ' + object.keyword + '             '+ object.is_primitive + '                ' + object.sample));


 /*######################################### */

//Null
interface NullGroup{
    name: string; keyword: string; is_primitive: string; sample: string
 
 }
 
 interface EnumNullGroup extends Array<NullGroup>{}
 
 
 const result_null:EnumNullGroup = [
     { name:'null', keyword: 'null', is_primitive: '-', sample: 'const x = null;'},
 ];
 
 result_null.forEach(object => console.log(object.name + '       ' + object.keyword + '           '+ object.is_primitive + '                 ' + object.sample));

 /*######################################### */

//Undefined
interface UndefinedGroup{
    name: string; keyword: string; is_primitive: string; sample: string
 
 }
 
 interface EnumUndefinedGroup extends Array<UndefinedGroup>{}
 
 
 const result_undefined:EnumUndefinedGroup = [
     { name:'undefined', keyword: 'undefined', is_primitive: '-', sample: 'const x = undefined;'},
 ];
 
 result_undefined.forEach(object => console.log(object.name + '  ' + object.keyword + '      '+ object.is_primitive + '                 ' + object.sample));

/*######################################### */

 //Array
interface ArrayGroup{
    name: string; keyword: string; is_primitive: string; sample: string
 
 }
 
 interface EnumArrayGroup extends Array<ArrayGroup>{}
 
 
 const result_array:EnumArrayGroup = [
     { name:'Array<number>', keyword: '[]', is_primitive: 'no', sample: 'const x = [ 12, 13];'},
 ];
 
 result_array.forEach(object => console.log(object.name + '  ' + object.keyword + '        '+ object.is_primitive + '                 ' + object.sample));

 /*######################################### */

 //Symbol
interface SymbolGroup{
    name: string; keyword: string; is_primitive: string; sample: string
 
 }
 
 interface EnumSymbolGroup extends Array<SymbolGroup>{}
 
 
 const result_symbol:EnumSymbolGroup = [
     { name:'Symbol', keyword: 'Symbol', is_primitive: 'yes', sample: 'const x = Symbol("ts");'},
 ];
 
 result_symbol.forEach(object => console.log(object.name + '     ' + object.keyword + '        '+ object.is_primitive + '                ' + object.sample));




