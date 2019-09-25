interface ProxySourceable {
    method();
}

class Source implements ProxySourceable {
    method() {
        console.log(`this is original method`);
    }
}

class ProxySource implements ProxySourceable {
    private source: Source;

    constructor() {
        this.source = new Source();
    }

    method() {
        this.before();
        this.source.method();
        this.after();
    }
    
    private before() {
        console.log(`before proxy`);
    }

    private after() {
        console.log(`after proxy`);
    }
}

{

    const proxy = new ProxySource();
    proxy.method();
}