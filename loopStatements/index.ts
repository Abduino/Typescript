// typescript looping statements 

var i:number;

//for loop statement
for(i=0; i < 10 ; i++){
    console.log("Iteration" + i )
}

//while statement 

i = 0
while(i <= 10){
    console.log("iteration" + i)
    i++
}


//do while statements
i = 0
do{
    console.log("Iteration" + i)
    i++
}while(i <= 10)


// nested for loop
var x: number;
var y:number;
for(x = 0; x <= 5; x++){
    for(y=0;y <= 5;y++){
        console.log("*")
    }
}