abstract class Calculator {
    public abstract calculate(num1: number, num2: number): number;

    public executeCalculate(input: string, symbol: string) {
        const arrayInt = this.split(input, symbol);
        return this.calculate(arrayInt[0], arrayInt[1]);
    }

    public split(input: string, symbol: string): number[] {
        const array: string[] = input.split(symbol);  
        const arrayInt: number[] = [parseInt(array[0]), parseInt(array[1])];  
        return arrayInt;  
    }
}

class PlusClass extends Calculator {

    public calculate(num1: number, num2: number): number {
        return num1 + num2;
    }

}

class MinusClass extends Calculator {

    public calculate(num1: number, num2: number): number {
        return num1 - num2;
    }

}

{
    const input: string = "3+8";
    const cal: Calculator = new PlusClass();
    const result = cal.executeCalculate(input, "+");
    console.log(result)
}