// function with zero parameter 
function displayHello() {
    console.log("hello world");
}
// function with parameter 
function displayUser(fname, lname, age, weight) {
    console.log("First name is= " + fname);
    console.log("Father name is = " + lname);
    console.log("Age = " + age);
    console.log("Weight " + weight);
}
// pass array value to the function 
function displayArray() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var x;
    for (x = 0; x <= 5; x++) {
        console.log(nums[x]);
    }
}
// calling a function 
displayHello();
displayUser("abdurehman", "redi", 50, 62.5);
displayArray(9, 8, 7, 6, 5, 4);
