"use strict";
class Currency {
    constructor(code, value) {
        this.code = code;
        this.value = value;
    }
    // Getters
    getCode() {
        return this.code;
    }
    getValue() {
        return this.value;
    }
    // Setters
    setCode(code) {
        this.code = code;
    }
    setValue(value) {
        this.value = value;
    }
    convert() {
        let converted = real.getValue() * this.getValue();
        return converted;
    }
}
// value update 25/11
const real = new Currency("BRL", 1);
const americanDolar = new Currency("US", 5.81);
const euro = new Currency("EUR", 6.10);
const libraEsterlina = new Currency("GBP", 7.30);
const formElement = document.querySelector("form");
const selectElement = document.querySelector("#currency");
const amountElement = document.querySelector("#amount");
const footerElement = document.querySelector("footer");
const descriptionElement = document.querySelector("#description");
const resultElement = document.querySelector("#result");
let convertedValue;
amountElement.onchange = () => {
    real.setValue(parseFloat(amountElement.value));
    console.log(real.getValue());
};
formElement.onsubmit = (event) => {
    event.preventDefault();
    let selectedCurrency = selectElement.value;
    footerElement.classList.add("show-result");
    switch (selectedCurrency) {
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
};
