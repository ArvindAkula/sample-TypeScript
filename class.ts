


class Motor{
name:string;
type:string;
company:string;
speed:string;
design:string;

shownMotor():string{
    return  ` Your Choosen mortor is : ${this.name} with 
    configuration: Type: ${this.type} 
    Of Company: Type: ${this.company} : 
    of Speed ${this.speed}`
    ;
}
runMortor():void{
console.log(`${this.name} will start running soon`);
}



}

let mortor = new Motor();
mortor.name="Tata Motor";
mortor.type="Tata type";
mortor.company="Tata company";
mortor.speed="Tata speed";
mortor.design="Tata design";

let motorlogs = mortor.shownMotor();
console.log(motorlogs);
let motors = mortor.runMortor();
console.log(motors);


