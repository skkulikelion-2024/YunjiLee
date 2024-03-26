//1. Use strict
//added in ES 5
// USE THIS FOR Valina Javascript.
'use strict';

//2. Variable(read&write)
//let (added in ES6)

let globalname = 'global name';

{let name = 'elite';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalname)};

console.log(name);
console.log(globalname);

//var(don't ever use this)
//var hoisting (move declaration from bottom to top)
//has no block scope

//3. contants(ony read)
//favor immutable data type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes
const daysinweek = 7;
const maxnumber = 5;
console.log(daysinweek);

//4. Variable types
//primitve, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class function

const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = `hello` + brendan;
console.log(`value: ${greeting}, type: ${ typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, Nan ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log('value: ' + canRead +','+ ' type: ' + typeof canRead);
console.log('value: ' + test +','+ ' type: ' + typeof test);

//null
let nothing = null;
console.log('value: ' + nothing +','+ ' type: ' + typeof nothing);

//undefined
let x;
console.log('value: ' + x +',' + ' type: ' + typeof x);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log('value: ' + text + ',' + ' type: '+ typeof text);
text = 1;
console.log('value: ' + text + ',' + ' type: '+ typeof text);
text = '7' + 5;
console.log('value: ' + text + ',' + ' type: '+ typeof text);
text = '8' / '2';
console.log('value: ' + text + ',' + ' type: '+ typeof text);