function CurrencyInput(props) {


    return (
        <div className="currency__inputGroup">
            <input type="number"
                value={props.amount}
                onChange={ev => props.onAmountChange(ev.target.value)}
            />

            <select
                value={props.currency}
                onChange={ev => props.onCurrencyChange(ev.target.value)}
            >
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>

            </select>
        </div>
    );
}

export default CurrencyInput;

