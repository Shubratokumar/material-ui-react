// Callback function Explanation

// declare a function
function greetings(name, callback){
    console.log(`Hi ${name}`);
    callback();
}

// callback function
function greetMessage(){
    console.log("How are you?");
}

// pass function as an argument
greetings("Shubrato", greetMessage);
