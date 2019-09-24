//形状公共接口
interface Shape {
    draw(): void;
}

//圆形抽象类Circle
abstract class Circle implements Shape {
    public abstract draw(): void;
}

//长方形抽象类Rectange
abstract class Rectange implements Shape {
    public abstract draw(): void;
}

//具体颜色的Circle实现
class BlueCircle extends Circle {
    public draw(): void {
        console.log(`绘制蓝色的圆`);
    }
}

class RedCircle extends Circle {
    public draw(): void {
        console.log(`绘制红色的圆`);
    }
}

//具体颜色的Rectange实现
class RedRectange extends Rectange{
    public draw(): void {
        console.log("绘制红色长方形");
    }
}

class BlueRectange extends Rectange {
    public draw():void {
        console.log("绘制蓝色长方形");
    }
}

//抽象工厂ShapeFactory 接口或者抽象类
interface ShapeFactory {
    getCircle(): Shape;
    getRectange(): Shape;
}

//RedShapeFactory（他所代表的是红色形状这一族）
class RedShapeFactory implements ShapeFactory {
    public getCircle(): Shape {
        return new RedCircle();
    }

    public getRectange(): Shape {
        return new RedRectange();
    }
}

//BlueShapeFactory（他所代表的是兰色形状这一族）
class BlueShapeFactory implements ShapeFactory {
    public getCircle(): Shape {
        return new BlueCircle();
    }

    public getRectange(): Shape {
        return new BlueRectange();
    }
}

{
        const redShapeFactory = new RedShapeFactory();
        const circle = redShapeFactory.getCircle();
        circle.draw();
        const rectangle = redShapeFactory.getRectange();
        rectangle.draw();

        const blueShapeFactory = new BlueShapeFactory();
        const blueCircle = blueShapeFactory.getCircle();
        blueCircle.draw();
}