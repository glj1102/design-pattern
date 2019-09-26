interface ICalculator<T> {
    calculate(num1: T, num2: T): T;
}

// 创建策略对象
class Plus implements ICalculator<number> {
    public calculate(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class Minus implements ICalculator<number> {
    public calculate(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class Multiply implements ICalculator<number> {
    public calculate(num1: number, num2: number): number {
        return num1 * num2;
    }
}

class PlusStr implements ICalculator<string> {
    public calculate(num1: string, num2: string): string {
        return `${num1} + ${num2}`;
    }
}

// 创建行为类
class Context {
    public calculator: ICalculator<any>
  
    public constructor (calculator: ICalculator<any>) {
      this.calculator = calculator;
    }
  
    public executeCalculate (
      num1: number,
      num2: number
    ): number {
      return this.calculator.calculate(num1, num2)
    }
  }

{
    const plusNumber = new Context(new Plus()).executeCalculate(1, 2);
    console.log(`plusNumber: ${plusNumber}`);
    const plusStr = new Context(new PlusStr()).executeCalculate(1, 2);
    console.log(`plusStr: ${plusStr}`);
}
