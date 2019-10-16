class Origin {
    name: string;
}
// js天生就有Prototype，通过Object.create就可以根据对象原型创建一个新的对象。
{
    const origin = new Origin();
    origin.name = "brook";

    const cloneObj = Object.create(origin);
    console.log(cloneObj.name); // brook
}

// 通过代码实现

interface Clonable<T>{
    clone(): T;
}

class OriginTest implements Clonable<OriginTest>{
    name: string;

    clone(): OriginTest{
        const target = new OriginTest();
        target.name = this.name;
        return target;
    }
}

{
    const origin = new OriginTest();
    origin.name = 'brook';
    
    let cloneObj = origin.clone();
    console.log(cloneObj.name); // brook
}


