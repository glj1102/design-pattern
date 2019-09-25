class AdapterSource {
    public method1() {
        console.log(`this is original method1`);
    }
}

interface Targetable {
    method1(): void;
    method2(): void;
}

// 类的适配器模式
class Adapter extends AdapterSource implements Targetable {

    method2(): void {
        console.log(`this is targetable method2`);
    }
}

// 对象的适配器模式
class WrapperAdapter implements Adapter {
    private source: AdapterSource;
    constructor(source: AdapterSource) {
        this.source = source;
    }
    public method2(): void {
        console.log(`this is targetable method2`);
    }    
    public method1(): void {
        this.source.method1();
    }
}

{

    const adapter: Targetable = new Adapter();
    adapter.method1();
    adapter.method2();

    const source = new AdapterSource();
    const target = new WrapperAdapter(source);
    target.method1();
    target.method2();
}


// 接口的适配器模式
interface AdapterSourceable {
    method1(): void;
    method2(): void;
}

abstract class Wrapper2 implements AdapterSourceable{  
      
    method1(){

    }  
    method2(){

    }  
}

class SourceSub1 extends Wrapper2 {
    method1() {
        console.log(`the sourceable interfact's first sub1 use method1`);
    }
}

class SourceSub2 extends Wrapper2 {
    method2() {
        console.log(`the sourceable interfact's second sub2 use method2`);
    }
}

{

    const source1: AdapterSourceable = new SourceSub1();
    source1.method1();
    source1.method2();

    const source2: AdapterSourceable = new SourceSub2();
    source2.method1();
    source2.method2();


}