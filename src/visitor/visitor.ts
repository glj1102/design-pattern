interface Visitor {
    visit(subject: Subject): void;
}

interface Subject {
    accept(visitor: Visitor): void;
    getSubjectValue(): string;
}

class MyVisitor implements Visitor {
    public visit(subject: Subject): void {
        console.log(`visit the subject: ${subject.getSubjectValue()}`);
    }
}

class MySubject implements Subject {

    public accept(visitor: Visitor): void {
        visitor.visit(this);
    }

    public getSubjectValue(): string {
        return `worktile`;
    }
}

{

    const visitor = new MyVisitor();
    const subject = new MySubject();
    subject.accept(visitor);

}
