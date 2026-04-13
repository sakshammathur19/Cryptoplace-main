import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
const Linechart = ({historicaldata}) => {
    const [data,setdata]=useState([["date","prices"]])
    useEffect(()=>{
        let datacopy=[["data","prices"]];
        if (historicaldata && historicaldata.prices) {
      historicaldata.prices.map((item) => {
        datacopy.push([
          new Date(item[0]).toLocaleDateString(), 
          item[1],
        ]);
      });
      setdata(datacopy);
    }
  }, [historicaldata]);
  return (
   <Chart 
   chartType='LineChart'
   data={data}
   height="400px"
   legendToggle

    />
  )
}

export default Linechart
