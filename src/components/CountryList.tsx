import React from 'react'
import { Country } from '../type'

interface Props {
    countries: Country
}

const CountryList: React.FunctionComponent<Props> = ({ countries }) => {
    return (
        <ul>
            <li></li>
        </ul>
    )
}

export default CountryList