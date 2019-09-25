module Lib {
    export interface ILibrary {
        copies: number;
        display(): void;
    }

    export class Library implements ILibrary {
        private _copies: number;

        public get copies(): number {
            return this._copies;
        }

        public set copies(value: number) {
            this._copies = value;
        }

        public display(): void {
            throw new Error("Method not implemented");
        }
    }

    export class Book extends Library {
        constructor(private author: string, private title: string, copies: number) {
            super();
            this.copies = copies;
        }

        public display(): void {
            console.log("Book:");
            console.log("--Author: " + this.author);
            console.log("--Title: " + this.title);
            console.log("--# Copies: " + this.copies);
        }
    }

    export class Video extends Library {
        constructor(private director: string, private title: string, private playTime: number, copies: number) {
            super();
            this.copies = copies;
        }

        public display(): void {
            console.log("Video:");
            console.log("--Director: " + this.director);
            console.log("--Title: " + this.title);
            console.log("--Play Time: " + this.playTime);
            console.log("--# Copies: " + this.copies);
        }
    }
}

module Decorator {
    export class Decorator<T extends Lib.Library> implements Lib.ILibrary {
        private _libraryItem: T;

        constructor(libraryItem: T) {
            this._libraryItem = libraryItem;
        }

        public get libraryItem(): T {
            return this._libraryItem;
        }

        public get copies(): number {
            return this._libraryItem.copies;
        }

        public set copies(value: number) {
            this._libraryItem.copies = value;
        }

        public display(): void {
            this._libraryItem.display();
        }
    }

    export class Borrowable<T extends Lib.Library> extends Decorator<T> {
        private borrowers: string[] = new Array();

        constructor(libraryItem: T) {
            super(libraryItem);
        }

        public borrowItem(name: string): void {
            this.borrowers.push(name);
            this.libraryItem.copies--;
        }

        public returnItem(name: string): void {
            this.borrowers.splice(this.borrowers.indexOf(name));
            this.libraryItem.copies++;
        }

        public display(): void {
            super.display();

            console.log("--borrowers:");
            this.borrowers.forEach(borrower => {
                console.log("----borrower: " + borrower);
            });
        }
    }
}

{
    var book = new Lib.Book("Worley", "Inside ASP.NET", 10);
    book.display();

    var borrowableBook = new Decorator.Borrowable(book);
    borrowableBook.borrowItem("Book borrower #1");
    borrowableBook.borrowItem("Book borrower #2");
    borrowableBook.display();

    var video = new Lib.Video("Spielberg", "Jaws", 23, 92);
    video.display();

    var borrowableVideo = new Decorator.Borrowable(video);
    borrowableVideo.borrowItem("Video borrower #1");
    borrowableVideo.borrowItem("Video borrower #2");
    borrowableVideo.display();
}
