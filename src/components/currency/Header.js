function Header(props) {

    
    console.log(props.rates)

    const usd = Math.ceil(props.rates['USD']);
    const eur = Math.ceil(props.rates['EUR']);

    return (
        <div className="header">
            <h1 className="header__name">Валюта-онлайн</h1>
            <div className="header__rates">
                <div className="header__rates__rat">USD: {usd}</div>
                <div className="header__rates__rat">EUR: {eur}</div>

            </div>

        </div>
    )
}

export default Header;