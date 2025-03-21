
function dreamJob(isGotPlacement){
    if (isGotPlacement) {
        console.log("I will buy clothes for my Family");
        var isMNC = true;
        if (isMNC) {
            console.log("I will have US Trip");  
        } else {
            console.log("I will GOA trip");   
        }
    } else {
        console.log('I will one Hanky for me'); 
    }
}
dreamJob(true);


var voteEligible = function(age){
    if (age==0 || age <0 || age>=130 || age==null) {
        console.log(`Invalid Data, AGE: ${age}`);   
    } else {
        if (age>=18) {
            console.log(`AGE: ${age}, Eligible for Vote`);
        } else {
            console.log(`AGE: ${age}, Not Eligible for vote `);
        }
    } 
}
voteEligible(90);


function marriageEligibility(gender, age){
    if (gender=="Male" && age>=21) {
        console.log(`Congrats. Ji le apani jindagi ${gender}, ${age}`);  
    }else if (gender=="Female" && age>=18) {
        console.log(`Congrats Girl. ${gender}, ${age}`);
    } else {
        console.log(`Nasib Phuta.. ${gender} ${age}`);
    }
}
marriageEligibility("Male", 27);