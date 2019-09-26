interface Handler {
    operation(): void;
}

abstract class AbstractHandler {
    private handler: Handler;

    public getHandler(): Handler {
        return this.handler;
    }

    public setHandler(handler: Handler): void {
        this.handler = handler;
    }
}

class MyHandler extends AbstractHandler implements Handler {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    operation(): void {
        console.log(`${this.name} operation deal`);
        if (this.getHandler()) {
            this.getHandler().operation();
        }
    }
}

{
    const h1 = new MyHandler("h1");
    const h2 = new MyHandler("h2");
    const h3 = new MyHandler("h3");

    h1.setHandler(h2);
    h2.setHandler(h3);
    h1.operation();

}
