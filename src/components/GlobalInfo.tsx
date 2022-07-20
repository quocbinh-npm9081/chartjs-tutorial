import React from 'react'

interface Props {
    newConfirmed: number,
    newDeaths: number,
    newRecovered: number
}

const GlobalInfo: React.FunctionComponent<Props> = ({ newConfirmed, newDeaths, newRecovered }) => {
    return (
        <div>
            <h1>Global Info</h1>
            <h3>New Confiremd: {new Intl.NumberFormat().format(newConfirmed)}</h3>
            <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
            <h3>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h3>
        </div>
    )
}

export default GlobalInfo