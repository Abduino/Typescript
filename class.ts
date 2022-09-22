class stud{
    id: number;
    f_name: string

    constructor(id: number, fname: string){
        this.f_name=f_name;
        this.id = id
    }
    print(){
        console.log("good")
    }
}
var st1 = new stud()
var st1.f_name = "Abdurehman"
var st1.id = 12345
st1.print()
class stud{

    constructor(public id: number,public f_name: string){}
    print(){
        console.log("good")
    }
}
var st1 = new stud()
var st1.f_name = "Abdurehman"
var st1.id = 12345
st1.print()

class newOne{
    name= abdure;
    sex = male
    
}