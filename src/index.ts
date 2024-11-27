const formElement = document.querySelector("form") as HTMLFormElement;
const selectElement = document.querySelector("#currency") as HTMLSelectElement;
const amountElement = document.querySelector("#amount") as HTMLInputElement;
const footerElement = document.querySelector("footer") as HTMLElement;
const descriptionElement = document.querySelector("#description") as HTMLElement
const resultElement = document.querySelector("#result") as HTMLElement;

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

    convert(): number {
        let converted:number = real.getValue() * this.getValue();
        return parseFloat(converted.toFixed(2));
    }

    result(){
        descriptionElement.innerHTML = `${this.code}$ 1 = R$${this.getValue()}`; 
        resultElement.innerHTML = `${this.convert()} Reais`;
    }

}

// value update 25/11
const real = new Currency("BRL", 1);
const americanDolar = new Currency("USD", 5.81);
const euro = new Currency("EUR", 6.10);
const libraEsterlina = new Currency("GBP", 7.30);




let convertedValue:number;

amountElement.onchange = () =>{
    real.setValue(parseFloat(amountElement.value));
    console.log(real.getValue());
}


formElement.onsubmit = (event) =>{
    
    event.preventDefault();
    
    let selectedCurrency = selectElement.value;

    footerElement.classList.add("show-result");



    switch(selectedCurrency){

        case "USD":
            americanDolar.result();
            break;

        case "EUR":
            euro.result();
            break;

        case "GBP":
            libraEsterlina.result();
            break;
            
        default:
            window.alert("error");    
    }
}
