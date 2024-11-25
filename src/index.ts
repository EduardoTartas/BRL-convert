class Moeda{
    private code:string;
    private value:number;

    constructor(code:string, value:number){
        this.code = code;
        this.value = value;
    }

    // Getters
    public getCode(): string {
        return this.code;
    }

    public getValue(): number {
        return this.value;
    }

    // Setters
    public setCode(code: string): void {
        this.code = code;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    convert(){
        real.value * this.value
    }

}

const real = new Moeda("BRL", 1);
const americanDolar = new Moeda("US", 5.81);
const euro = new Moeda("EUR", 6.10);
const libraEsterlina = new Moeda("GBP", 7.30);



