let a: number = 10;
let b: number = 5;

let s: string = "abc";
let bl: boolean = a > b;
let an: any = "なんでも入る";
let un: unknown = "abc";
let nu: null = null;
let ud: undefined = undefined;
let ob: object = Math;

// union types
let number_or_string: number | string =  3

let ans: number = a * b;
console.log(ans);
