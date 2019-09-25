class CPU {  
      
    public startup() {  
        console.log("cpu startup!");  
    }  
      
    public shutdown() {  
        console.log("cpu shutdown!");  
    }  
}

class Memory {  
      
    public startup() {  
        console.log("memory startup!");  
    }  
      
    public shutdown() {  
        console.log("memory shutdown!");  
    }  
}

class Disk {  
      
    public startup() {  
        console.log("disk startup!");  
    }  
      
    public shutdown() {  
        console.log("disk shutdown!");  
    }  
}

class Computer {
    private cpu: CPU;
    private memory: Memory;
    private disk: Disk;
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.disk = new Disk();
    }

    public startup(){  
        console.log("start the computer!");  
        this.cpu.startup();  
        this.memory.startup();  
        this.disk.startup();  
        console.log("start computer finished!");  
    }  
      
    public shutdown(){  
        console.log("begin to close the computer!");  
        this.cpu.shutdown();  
        this.memory.shutdown();  
        this.disk.shutdown();  
        console.log("computer closed!");  
    }  
}

{
    const computer = new Computer();
    computer.startup();
    computer.shutdown();
}

