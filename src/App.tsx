import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { dark } from './styles/Theme';
import { ThemeProvider } from 'styled-components';
import GlobalInfo from './components/GlobalInfo';
import CountryList from './components/CountryList';
import type { Country, ResponseData } from './type'
import BarChar from './components/BarChar';



function App() {

  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [activeCountry, setActiveCountry] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary')
    const data: ResponseData = await result.json();
    console.log(data.Countries);
    setData(data);
  }

  const onHandleCountryClick = (country: Country) => {
    const countryIndex = activeCountry.findIndex(acountry => acountry.ID === country.ID)
    if (countryIndex > -1) {
      const newActiveCountry = [...activeCountry];
      newActiveCountry.splice(countryIndex, 1);
      setActiveCountry([...newActiveCountry])

    } else {
      setActiveCountry([...activeCountry, country])
    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        {data ? (
          <>
            <GlobalInfo
              newConfirmed={data?.Global.NewConfirmed}
              newDeaths={data?.Global.NewDeaths}
              newRecovered={data?.Global.NewRecovered}
            />
            <hr />

            <BarChar countries={activeCountry} />
            <CountryList countries={data.Countries}
              onItemCLick={onHandleCountryClick}
            />

          </>
        ) : "Loading ... "}
      </ThemeProvider>
    </>
  );
}

export default App;
