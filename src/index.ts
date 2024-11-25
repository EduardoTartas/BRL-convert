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
        return converted;
    }

}

// value update 25/11
const real = new Currency("BRL", 1);
const americanDolar = new Currency("US", 5.81);
const euro = new Currency("EUR", 6.10);
const libraEsterlina = new Currency("GBP", 7.30);


const formElement = document.querySelector("form") as HTMLFormElement;
const selectElement = document.querySelector("#currency") as HTMLSelectElement;
const amountElement = document.querySelector("#amount") as HTMLInputElement;
const footerElement = document.querySelector("footer") as HTMLElement;
const descriptionElement = document.querySelector("#description") as HTMLElement
const resultElement = document.querySelector("#result") as HTMLElement;

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
            convertedValue = americanDolar.convert();
            descriptionElement.innerHTML = `${selectedCurrency}$ 1 = R$${americanDolar.getValue()}`;
            resultElement.innerHTML = `${convertedValue.toFixed(2)} Reais`;
            break;

        case "EUR":
            convertedValue = euro.convert();
            descriptionElement.innerHTML = `${selectedCurrency}$ 1 = R$${euro.getValue()}`;
            resultElement.innerHTML = `${convertedValue.toFixed(2)} Reais`;
            break;

        case "GBP":
            convertedValue = libraEsterlina.convert();
            descriptionElement.innerHTML = `${selectedCurrency}$ 1 = R$${libraEsterlina.getValue()}`; 
            resultElement.innerHTML = `${convertedValue.toFixed(2)} Reais`;
            break;
            
        default:
            window.alert("error");    
    }

    console.log(convertedValue);

}



