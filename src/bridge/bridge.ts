interface ICar {
    drive(): void;
}

class BMW implements ICar {
    drive(): void {
        console.log(`bmw driveing ...`);
    }
}

class Benz implements ICar {
    drive(): void {
        console.log(`Benz driveing ...`);
    }
}

abstract class Bridge {
    private car: ICar;

    drive() {
        this.car.drive();
    }

    public getCar() {
        return this.car;
    }

    public setCar(car: ICar) {
        this.car = car;
    }
}

class myBridge extends Bridge {
    public drive() {
        this.getCar().drive();
    }
}

{
    const bridge1 = new myBridge();
    const bmw = new BMW();
    bridge1.setCar(bmw);
    bridge1.drive();

    const bridge2 = new myBridge();
    const benz = new Benz();
    bridge2.setCar(benz);
    bridge2.drive();
}