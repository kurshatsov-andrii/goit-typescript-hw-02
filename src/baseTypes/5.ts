/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

// let union;
// let literal;


let union: string | number;
union = 'Nadezhda';
union = 30;
let literal: 'enable' | 'disable';
literal = 'enable';
literal = 'disable';