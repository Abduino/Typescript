// function with zero parameter 
function displayHello(){
    console.log("hello world")
}


// function with parameter 

function displayUser( fname:string, lname:string, age:number, weight:number ){
    console.log("First name is= " + fname)
    console.log("Father name is = " + lname)
    console.log("Age = " + age)
    console.log("Weight " + weight)
}


// pass array value to the function 
function displayArray(...nums:number[]){
    var x:number;
    for(x=0; x<=5; x++){
        console.log(nums[x])
    }
}


// calling a function 
displayHello()
displayUser("abdurehman", "redi", 50, 62.5)

displayArray(9,8,7,6,5,4)




