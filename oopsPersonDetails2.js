class Classes{
    constructor(classId,seats,className,capacity){
        this.classId='classId';
        this.seats='seats';
        this.className='className';
        this.capacity='capacity';
        // this.batches=[];
    }

    getDetails(){
        console.log(this.classId);
        console.log(this.seats);
        console.log(this.className);
        console.log(this.capacity);
    }

}

const studentObj= new Classes(1,12,'Einstein',24);

console.log(studentObj.classId);
console.log(studentObj.seats);
console.log(studentObj.className);
console.log(studentObj.capacity);







