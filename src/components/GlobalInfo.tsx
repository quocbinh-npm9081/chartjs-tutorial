import React from 'react'
import styled from 'styled-components'

interface Props {
    newConfirmed: number,
    newDeaths: number,
    newRecovered: number
}

const Wrapper = styled.div`
    text-align:center;
    margin: 1rem 0;
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontmd};
    @media(max-width: 468px){
        font-size: ${props => props.theme.fontsm};
    }
`

const GlobalInfo: React.FunctionComponent<Props> = ({ newConfirmed, newDeaths, newRecovered }) => {
    return (
        <Wrapper>
            <h1>Global Info</h1>
            <h3>New Confiremd: {new Intl.NumberFormat().format(newConfirmed)}</h3>
            <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
            <h3>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h3>
        </Wrapper>
    )
}

export default GlobalInfo