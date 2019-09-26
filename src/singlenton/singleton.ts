// 饿汉式： 单例实例在类装载时就构建，急切初始化。（预先加载法）
class SingletonCache {

    private items: { [key: string]: string } = {}; 

    private static instance: SingletonCache = new SingletonCache();
    
    // public static readonly instance: SingletonCache = new SingletonCache();
    
    public static getInstance() {
        return this.instance;
    }

    public static otherStaticMethod() {
        console.log("other operation, new instance");    
    }

    setCache(key: string, value: string) {
        this.items[key] = value;
    }

    getCache(key: string) {
        return this.items[key];
    }
}

// 懒汉式：单例实例在第一次被使用时构建，延迟初始化。
class SingletonCache1 {
    private items: { [key: string]: string } = {}; 

    private static instance: SingletonCache1;
    
    public static getInstance() {
        if (!this.instance) {
            this.instance = new SingletonCache1();
        }
        return this.instance;
    }

    public static otherStaticMethod() {
        console.log("other operation, not new instance");    
    }

    setCache(key: string, value: string) {
        this.items[key] = value;
    }

    getCache(key: string) {
        return this.items[key];
    }
}

{
    SingletonCache.getInstance().setCache(`name`, `singleton`);
    console.log(SingletonCache.getInstance().getCache(`name`));
    // SingletonCache.instance.setCache(`name`, `singleton`);
    // console.log(SingletonCache.instance().getCache(`name`));
    // SingletonCache1.getInstance().setCache(`name`, `singleton-1`);
    // console.log(SingletonCache1.getInstance().getCache(`name`));
}