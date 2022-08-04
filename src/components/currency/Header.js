function Header(props) {
    console.log(props.rates)

    return (
        <div className="header">
            <h1 className="header__name">Валюта-онлайн</h1>
            <div className="header__rates">
                <div className="header__rates__rat">USD: {props.rates['USD']}</div>
                <div className="header__rates__rat">EUR: {props.rates['EUR']}</div>

            </div>

        </div>
    )
}

export default Header;