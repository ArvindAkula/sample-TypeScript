class DilPizza {

static pname:string = "Dil Pizza";
static pCompany:string="Tata Company";
static proce:string="200";

addons:string[];

makePizza():string{
    return "Making pizza";
    
}


static takeOrder1():void{
    console.log("Making pizza"+DilPizza.pname);
    console.log("Making pizza"+DilPizza.pCompany);
    console.log("Making pizza"+DilPizza.proce);

    
}

addOns(){
    this.addons.push("Extra Cheese");
    this.addons.push("Extra Chilli");

}

}

DilPizza.proce = "300";
DilPizza.takeOrder1();
