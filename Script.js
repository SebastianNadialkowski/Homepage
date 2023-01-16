
{
    const button = document.querySelector(".js-button");
    const doIt = () => {
        button.addEventListener("click", changeTextColorClick);
    };

    const changeTextColorClick = () => {
        const body = document.querySelector(".body")
        body.classList.toggle("body--alternative");
        button.classList.toggle("button--green");
        button.innerText = body.classList.contains("body--alternative") ? " zielony " : " czerwony "
    };

    doIt();
}

{
    const calculateResult = (value, currency) => {
        const rateEUR = 4.6843;
        const rateUSD = 4.4100;
        const rateGBP = 5.4418;
        const rateCHF = 4.7482;
        const rateJPY = 3.2291;
        switch (currency) {
            case "EUR":
                return value / rateEUR;
            case "USD":
                return value / rateUSD;
            case "GBP":
                return value / rateGBP;
            case "CHF":
                return value / rateCHF;
            case "JPY":
                return value / rateJPY;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const valueElement = document.querySelector(".js-value");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");
        const value = +valueElement.value;
        const currency = currencyElement.value
        const result = calculateResult(value, currency);
        resultElement.innerText = `${value.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}


