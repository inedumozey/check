const check = require("./build/bundle.js");

function runTest(check){
    console.log("**********************starting test!**********************");
    console.log("")

    if(!check.isString( "" )){
        throw new Error("internal error parsing string")    
    }
    else if(!check.isArray( [] )){
        throw new Error("internal error parsing array")
    }
    else if(!check.isFunction( ()=>{} )){
        throw new Error("internal error parsing function")
    }
    else if(!check.isNumber( 10 )){
        throw new Error("internal error parsing number")
    }
    else if(!check.isObject( {} )){
        throw new Error("internal error parsing object")
    }

    console.log("")
    console.log("**********************test ended with no problem**********************");
}
runTest(check)