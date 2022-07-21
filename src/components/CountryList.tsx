import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import type { Country } from '../type'
import CountryItem from '../components/CountryItem'
interface Props {
    countries: Country[];
    onItemCLick: (country: Country) => void;
}

const ListWrapper = styled.ul`
    display:flex;
    align-item:center;
    justify-content:center;
    flex-wrap: wrap;
`
const SearchWrapp = styled.div`
    width: 50vw;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 2rem auto;
    input{
        padding: 1rem;
        border-radius: 15px;
        font-size: ${props => props.theme.fontmd};
        @media(max-width: 468px){
            font-size: ${props => props.theme.fontsm};
        }
    }
`

const CountryList: React.FunctionComponent<Props> = ({ countries, onItemCLick }) => {

    const [valueInput, setValueInput] = useState("");
    const [filteredResults, setFilteredResults] = useState<Country[]>([]);

    const handleChange: any = (e: any) => {
        setValueInput(e.target.value);
        const filteredData = countries.filter(country => {
            return Object.values(country.Country).join('').toLowerCase().trim().includes(valueInput.toLowerCase())
        })
        setFilteredResults(filteredData);

    }


    return (<>
        <SearchWrapp>
            <input type="text" placeholder='Country'
                onChange={handleChange}
            />
        </SearchWrapp>
        <ListWrapper>
            {

                valueInput.trim().length > 1 ? (
                    filteredResults.map(country => (
                        <CountryItem country={country} key={country.ID}
                            onItemCLick={onItemCLick}
                        />

                    ))
                ) : (
                    countries.map(country => (
                        <CountryItem country={country} key={country.ID}
                            onItemCLick={onItemCLick}
                        />

                    ))
                )




            }
        </ListWrapper>
    </>
    )
}

export default CountryList