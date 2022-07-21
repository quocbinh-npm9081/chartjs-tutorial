import React, { useState } from 'react'
import styled from 'styled-components'
import type { Country } from '../type'
interface Props {
    country: Country,
    onItemCLick: (country: Country) => void;
}
interface ListContentItem {
    isActive: boolean
}
const ListItem = styled.li`
    width: 50%;
    cursor: pointer;

    @media(min-width: 468px){
        width 20%;
    }
`

const ListContent = styled.div<ListContentItem>`
    border: 1px solid  ${props => props.isActive ? props.theme.body : props.theme.text}!important;;
    color: ${props => props.isActive ? props.theme.body : props.theme.text};
    background-color: ${props => props.isActive ? "#fff" : "#000"};
    padding: 1rem;
    margin: .5rem;
    border-radius: 1rem;
    font-size: ${props => props.theme.fontsm};
    @media(max-width: 468px){
        font-size: ${props => props.theme.fontxs};
    };
    h4{
        padding: 1rem 0;
    };
    .inline{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font: caption;
    }
  
`

const CountryItem: React.FC<Props> = ({ country, onItemCLick }) => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = (country: Country) => {
        onItemCLick(country);
        setIsActive(!isActive)
    }
    return (
        <ListItem
            key={country.ID}
            onClick={() => handleClick(country)}

        >
            <ListContent
                isActive={isActive}
            >
                <h4 className="inline">
                    {country.Country}
                </h4>
                <div className="inline">New Confirmed: {country.NewConfirmed}</div>
                <div className="inline">New Deaths: {country.NewDeaths}</div>
                <div className="inline">New Recovered: {country.NewRecovered}</div>
            </ListContent>
        </ListItem>
    )
}

export default CountryItem