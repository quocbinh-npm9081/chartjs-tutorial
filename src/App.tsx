import React, { useState, useEffect } from 'react';
import GlobalInfo from './components/GlobalInfo'
import { ResponseData } from './type'




function App() {

  const [data, setData] = useState<ResponseData | undefined>(undefined);


  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary')
    const data: ResponseData = await result.json();
    console.log(data.Countries);
    setData(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {data ? <GlobalInfo
        newConfirmed={data?.Global.NewConfirmed}
        newDeaths={data?.Global.NewDeaths}
        newRecovered={data?.Global.NewRecovered}
      /> : "Loading ... "}
      <h1>Global Covic 19</h1>

    </div>
  );
}

export default App;
