interface ICommand {
    execute(): void;
}

class Command implements ICommand {

    private receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.action();
    }
}

class Receiver {
    action() {
        console.log(`command received!`);
    }
}

class Invoker {
    private command: ICommand;

    constructor(command: ICommand) {
        this.command = command;
    }

    action() {
        this.command.execute();
    }
}

{

    const receiver = new Receiver();
    const command = new Command(receiver);

    const invoker = new Invoker(command);

    invoker.action();
}