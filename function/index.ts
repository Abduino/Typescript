// function without a parameter 
function disHello(){
    console.log("hello world")
}

// function with parameter 

function disUser( fname:string, lname:string, age:number, weight:number ){
    console.log("First name is= " + fname)
    console.log("Father name is = " + lname)
    console.log("Age = " + age)
    console.log("Weight " + weight)
}

// pass
function disArray(...nums:number[]){
    var x:number;
    for(x=0; x<=5; x++){
        console.log(nums[x])
    }
}
// default value function 
function defaultFunction (f_name: string, age:number=25){
    console.log("First name is = " + f_name)
    console.log("Age = " + age)
    
}


// calling a function 
disHello()
disUser("abdurehman", "redi", 50, 62.5)
disArray(9,8,7,6,5,4)

defaultFunction("abdurehman", 40)
defaultFunction("abdurehman")






