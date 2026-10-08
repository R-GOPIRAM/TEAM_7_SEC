
class Student{
    constructor(id, name, grade){
        this.id= id;
        this.name=name;
        this.grade=grade;
    }
    display(){
        return `ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade} `;
    }

    setName(name){
        this.name = name;
    }
}


const std = new Student(1,"Jones", "A");
console.log(std.display());
std.setName("Martin");
console.log(std.display())
