interface Mediator {
    createMediator(): void;
    workAll(): void;
}

class MyMediator implements Mediator {

    private user1: User;
    private user2: User;

    public createMediator(): void {
        this.user1 = new User1(this);
        this.user2 = new User2(this);
    }
    public workAll(): void {
        this.user1.work();
        this.user2.work();
    }
}

abstract class User {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public getMediator(): Mediator {
        return this.mediator;
    }

    abstract work(): void;
}

class User1 extends User {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    public work(): void {
        console.log(`user1 exe!`);
    }
}

class User2 extends User {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    public work(): void {
        console.log(`user1 exe!`);
    }
}

{
    const mediator = new MyMediator();
    mediator.createMediator();
    mediator.workAll();
}