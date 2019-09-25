interface ILibrary {
    copies: number;
    display(): void;
}

class Book implements ILibrary {

    constructor(private title: string, copies: number) {
        this.copies = copies;
    }

    private _copies: number;

    public get copies(): number {
        return this._copies;
    }

    public set copies(value: number) {
        this._copies = value;
    }

    public display(): void {
        console.log(`this book title: ${this.title}`);
        console.log(`this book copies: ${this.copies}`);
    }
}

abstract class Decorator implements ILibrary {
    protected library: ILibrary;
    private _copies: number;

    public get copies(): number {
        return this.library.copies;
    }

    public set copies(value: number) {
        this.library.copies = value;
    }

    constructor(library: ILibrary) {
        this.library = library;
    }

    public abstract display(): void;
}

class Borrowable extends Decorator {

    constructor(library: ILibrary) {
        super(library);
    }

    display() {
        this.library.display();
    }
}

{
    const book = new Book(`devOps`, 10);
    const borrower = new Borrowable(book);
    borrower.display();
}
