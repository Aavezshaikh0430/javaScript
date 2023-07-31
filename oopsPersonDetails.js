class Student{
    constructor(name,age,address,IdNo,gitMarks){
        this.name='name';
        this.age='age';
        this.address='address';
        this.IdNo='IdNO';
        this.gitMartks='gitMarks';
        this.collegeName=[];
    }

    assignName(collegeName){
        this.collegeName= collegeName;
    }

    studentDetails(){
        console.log(this)
    }
    
}
let studentobj = new Student('Aavez',27,'khajaNager near madina masjid',13,27);

studentobj.assignName('V.m. senior college Osmanabad');

console.log(studentobj.studentDetails);
console.log(studentobj.assignName);

studentobj.studentDetails();
studentobj.assignName();




