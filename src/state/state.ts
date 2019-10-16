
class State {
    private value: string;

    public getValue() {
        return this.value;
    }

    public setValue(value: string) {
        this.value = value;
    }

    public method1() {
        console.log(`execute the first opt!`);
    }

    public method2() {
        console.log(`execute the second opt!`);
    }
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }

    public setState(state: State) {
        this.state = state;
    }

    public method(): void {
        if (this.state.getValue() === `state1`) {
            this.state.method1();
        }
        else if (this.state.getValue() === `state2`) {
            this.state.method2();
        }
    }
}

{
    const state = new State();
    const context = new Context(state);

    // 1
    state.setValue(`state1`);
    context.method();

    //2
    state.setValue(`state2`);
    context.method();
}