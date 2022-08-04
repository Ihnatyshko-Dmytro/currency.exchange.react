import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import Header from "./Header";

function Currency() {

    const [amount1, setAmount1] = useState();
    const [amount2, setAmount2] = useState();

    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('USD');

    const [rates, setRates] = useState([]);

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')

            .then(response => response.json())
            .then(json => {setRates(json);
            });
    }, []);


    let objRate = {'UAH': 1};
        for (let i = 0; i< rates.length; i++) {
            objRate[rates[i].cc] = rates[i].rate;
        }
    

    function format(number) {
        return number.toFixed(2)
    }
    

    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * objRate[currency1] / objRate[currency2]));
        setAmount1(amount1)
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * objRate[currency1] / objRate[currency2]));
        setCurrency1(currency1)
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * objRate[currency2] / objRate[currency1]));
        setAmount2(amount2)
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * objRate[currency2] / objRate[currency1]));
        setCurrency2(currency2)
    }

    return (
        <>
        <header>
            <Header rates={objRate}/>
        </header>
        <main>
            
        <div className="currency" >
        <h2 className="currency__name">Калькулятор валют</h2>
            <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={rates}
                amount={amount1}
                currency={currency1} />


            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={rates}
                amount={amount2}
                currency={currency2} />
        </div>
        </main>
        </>
    )
}

export default Currency;