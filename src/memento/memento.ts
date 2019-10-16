class OriginClass {

    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    public getValue() {
        return this.value;
    }

    public setValue(value: string) {
        this.value = value;
    }

    public createMemento(): Memento {
        return new Memento(this.value);
    }

    public restoreMemento(memento: Memento) {
        this.value = memento.getValue();
    }

}

class Memento {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }
    public getValue() {
        return this.value;
    }

    public setValue(value: string) {
        this.value = value;
    }
}

class StorageClass {

    private memento: Memento;

    constructor(memento: Memento) {
        this.memento = memento;
    }

    public getMemento() {
        return this.memento;
    }

    public setMemento(memento: Memento) {
        this.memento = memento;
    }
}

{
    // 原始类
    const original = new OriginClass(`chaos`);

    // 备忘录类和存储备忘录类
    const storage = new StorageClass(original.createMemento());

    // 修改原始类的状态
    console.log(`初始化状态为: ${original.getValue()}`);
    original.setValue(`iris`);
    console.log(`修改后状态为: ${original.getValue()}`);

    // 恢复原始类的状态
    original.restoreMemento(storage.getMemento());
    console.log(`恢复后状态为: ${original.getValue()}`);

}