var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.shownMotor = function () {
        return " Your Choosen mortor is : " + this.name + " with \n    configuration: Type: " + this.type + " \n    Of Company: Type: " + this.company + " : \n    of Speed " + this.speed;
    };
    Motor.prototype.runMortor = function () {
        console.log(this.name + " will start running soon");
    };
    return Motor;
}());
var mortor = new Motor();
mortor.name = "Tata Motor";
mortor.type = "Tata type";
mortor.company = "Tata company";
mortor.speed = "Tata speed";
mortor.design = "Tata design";
var motorlogs = mortor.shownMotor();
console.log(motorlogs);
var motors = mortor.runMortor();
console.log(motors);
