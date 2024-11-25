class Currency{
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

const real = new Currency("BRL", 1);
const americanDolar = new Currency("US", 5.81);
const euro = new Currency("EUR", 6.10);
const libraEsterlina = new Currency("GBP", 7.30);



