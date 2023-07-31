class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.speed = 0;
    }
  
    accelerate() {
      this.speed += 10;
    }
  
    brake() {
      this.speed -= 10;
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla');
  
  myCar.accelerate();
  console.log(myCar.speed); 
  
  myCar.brake();
  console.log(myCar.speed); 
  
  console.log(myCar.make);
  console.log(myCar.model);
  