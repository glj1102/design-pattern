class Component {
    constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
    private pointer = 0;

    constructor(public name: string, public components: Component[]) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        } else {
            return {
                done: true,
                value: null
            };
        }
    }

    public hasNext(): boolean {
        if (this.pointer < this.components.length - 1) {
            return true;
        } else {
            return false;
        }
    }
}

{
    const frame = new Frame(`frame`, [new Component(`component-1`), new Component(`component-2`), new Component(`component-3`), new Component(`component-4`), new Component(`component-5`)]);
    while (frame.hasNext()) {
        console.log(frame.next());
    }
}
