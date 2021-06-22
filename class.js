class Person{
    occupation = "SDE";

    constructor(name,company){
        this.name=name;
        this.company=company;
    }

    setDetails(prof){
        this.profile= prof;
    }
}

let obj1= new Person("naman");
let obj2= new Person("aye","yo");
console.log(obj1,obj2);
obj1.setDetails("what");
obj2.setDetails("ohkk");
console.log(obj1, obj2);

