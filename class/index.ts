class Drivers{
    f_name: string
    l_name: string
    age:number 
    weight: number
    
    constructor (f_name:string, l_name:string, age:number, weight:number){
        this.f_name = f_name
        this.l_name= l_name
        this.age= age
        this.weight= weight
    }
    display():void{
        console.log("First name is= " + this.f_name);
        console.log("Father name is = " + this.l_name);
        console.log("Age = " + this.age);
        console.log("Weight " + this.weight);
    }
}

var driver1 = new Drivers("abdurehman", "redi", 25, 62.5)
driver1.display()