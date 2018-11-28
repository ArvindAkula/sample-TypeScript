class Vehicle {

name:string;
company:string;
price:number;
discount:string;

constructor (name?:string,company?:string,price?:number,discount?:string){
this.name=name;
this.company=company;
this.price=price;
this.discount=discount;
}


showV(){
    console.log(`Your vechile Name is ${this.name}`);

}
run(){
    console.log(`Your vechile Name is ${this.name} Company: ${this.company}`);
    }

}

class TwoWheeler extends Vehicle{

    color:string;
    speed:string;
    run(){
    console.log(`Your Vechile Runs at ${this.speed}`);
    
    }


}

let twoWheeler = new TwoWheeler();
twoWheeler.name = "TVS Scooty";
twoWheeler.company = "Tata";
twoWheeler.speed = "200 km/hr";
twoWheeler.run();
twoWheeler.showV();



