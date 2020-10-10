import React, { useState, useEffect } from 'react'
import Button from './Button'

const apiUrl ='https://api.ratesapi.io/api/latest'

function Calculator() {
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('PLN')
    const [currencyTo, setCurrencyTo] = useState('USD')
    const [result, setResult] = useState(0)
    const [currencies, setCurrencies] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${apiUrl}?base=${currencyFrom}`)
        .then(response => response.json())
        .then(data => {
            setResult(Math.floor(amount * data.rates[currencyTo] * 100) / 100)
        })
    }

    const changeAmount = (event) => {
        setAmount(event.target.value)
    }

    useEffect(() => {
        fetch(`${apiUrl}?base=PLN`)
        .then(response => response.json())
        .then(data => {
            setCurrencies(Object.keys(data.rates).sort())
        })
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input
                        type="number"
                        placeholder="Amount"
                        onChange={changeAmount}
                    />
                </label>
            </div>
            <div>
                <label>
                Currency 1
                <Select
                    currencies={currencies}
                    currency={currencyFrom}
                    setCurrency={setCurrencyFrom}
                />
                </label>
            </div>
            <div>
                <label>
                Currency 2
                <Select
                    currencies={currencies}
                    currency={currencyTo}
                    setCurrency={setCurrencyTo}
                />
                </label>
            </div>
            <div>
                Result: {result}
            </div>
            <Button type="submit">Send</Button>
        </form>
    )
}

function Select({currency, setCurrency, currencies}) {

    return (
        <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
            {currencies.map((currency) =>
                <option value={currency} key={currency}>{currency}</option>
            )}
        </select>
    )
}

export default Calculator