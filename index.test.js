import { isArray, isFunction, isNumber, isObject, isString } from "./checkers.js";

function runTest(){
    console.log("**********************starting test!**********************");
    console.log("")

    if(!isString( "" )){
        throw new Error("internal error parsing string")    
    }
    else if(!isArray( [] )){
        throw new Error("internal error parsing array")
    }
    else if(!isFunction( ()=>{} )){
        throw new Error("internal error parsing function")
    }
    else if(!isNumber( 10 )){
        throw new Error("internal error parsing number")
    }
    else if(!isObject( {} )){
        throw new Error("internal error parsing object")
    }

    console.log("")
    console.log("**********************test ended with no problem**********************");
}
runTest()