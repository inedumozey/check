import { checkStrig } from "./src/test.js";

export const isString = (str)=> typeof str ==="string" ? true : false;

export const isNumber = (num)=> typeof num === "number" ? true : false;

export const isArray = (arr)=> Array.isArray(arr) ? true : false;

export const isFunction = (fn)=> typeof fn ==='function' ? true : false;

export const isObject = (obj)=> !Array.isArray(obj) && obj instanceof Object && typeof obj !=='function' ? true : false;


//test
let str = "hello world" ;
let num = 100; 
let array = [];
let obj = {};
let fn = ()=>{};

// console.log(isString(str)) // true
// console.log(isNumber(num)) // true
// console.log(isArray(array)) // true
// console.log(isObject(obj)) // true
// console.log(isFunction(fn)) // true

// console.log(isObject(array)) // false
// console.log(isObject(fn)) // false

// console.log(isObject(null)) // false
// console.log(isObject(undefined)) // false

