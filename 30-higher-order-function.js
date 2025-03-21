




function jenny(callbacks){
    console.log(`==== Jenny went home and have snacks======`);
    console.log(`===== Jenny started home work preparation =========`);
    console.log(`===== After 2 hours she have completed her home work =======`);
    // Elon Callback
    callbacks();
    return function(){
        console.log("Hey buddy.. I am back....."); 
    }
}

let elon = function(){
    console.log(`******** Elon went home and have snacks ***********`);
    console.log(`******** Elon went to play match ***********`);
    console.log(`******** Elon came back and started copying homework ***********`);
    console.log(`******** Elon Completed his home work ***********`);
}
let result = jenny(elon);
console.log("-----------------------------------------------------------------");


