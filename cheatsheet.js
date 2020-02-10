"use strict";
/* Replica of Cheatsheet with slight modification
* Generate tsconfig.json using === tsc --init
* Compile cheatsheet.ts to generate the js file using "tsc" command
* Run on the console with === node cheatsheet.js
*/
var attributes = ['type', 'keyword', 'is primitive', 'sample'];
var space_attr = '';
for (var i = 0; i < attributes.length; ++i) {
    //add space in between
    space_attr += attributes[i] + '       ';
}
console.log(space_attr);
var result_number = [
    { name: 'number', keyword: 'none', is_primitive: 'yes', sample: 'const x = 5;' },
];
result_number.forEach(function (object) { return console.log(object.name + '     ' + object.keyword + '          ' + object.is_primitive + '                ' + object.sample); });
var result_string = [
    { name: 'string', keyword: '""', is_primitive: 'yes', sample: 'const x = "Hi";' },
];
result_string.forEach(function (object) { return console.log(object.name + '     ' + object.keyword + '            ' + object.is_primitive + '                ' + object.sample); });
var result_boolean = [
    { name: 'boolean', keyword: '', is_primitive: 'yes', sample: 'const x = true;' },
];
result_boolean.forEach(function (object) { return console.log(object.name + '     ' + object.keyword + '             ' + object.is_primitive + '                ' + object.sample); });
var result_null = [
    { name: 'null', keyword: 'null', is_primitive: '-', sample: 'const x = null;' },
];
result_null.forEach(function (object) { return console.log(object.name + '       ' + object.keyword + '           ' + object.is_primitive + '                 ' + object.sample); });
var result_undefined = [
    { name: 'undefined', keyword: 'undefined', is_primitive: '-', sample: 'const x = undefined;' },
];
result_undefined.forEach(function (object) { return console.log(object.name + '  ' + object.keyword + '      ' + object.is_primitive + '                 ' + object.sample); });
var result_array = [
    { name: 'Array<number>', keyword: '[]', is_primitive: 'no', sample: 'const x = [ 12, 13];' },
];
result_array.forEach(function (object) { return console.log(object.name + '  ' + object.keyword + '        ' + object.is_primitive + '                 ' + object.sample); });
var result_symbol = [
    { name: 'Symbol', keyword: 'Symbol', is_primitive: 'yes', sample: 'const x = Symbol("ts");' },
];
result_symbol.forEach(function (object) { return console.log(object.name + '     ' + object.keyword + '        ' + object.is_primitive + '                ' + object.sample); });
