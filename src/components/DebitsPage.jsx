import React, { useState, useEffect } from 'react'
import DebitsCard from './DebitsCard';
const axios = require('axios');

const DebitsPage = () => {
  const [debits, setDebits] = useState([]);

  useEffect(() => {
    document.title = "Debits"; // sets the title of the page to Debits

    const getDebits = async () => { // call the api whenever the page loads and store data in debits
      let res = await axios.get('https://moj-api.herokuapp.com/debits');
      setDebits(res.data);
    }

    getDebits();
  }, [])

  useEffect(() => { //prints debits whenever changed
    console.log(debits);
  }, [debits])

  const generateDebits = () => { // generate a list of cards for the page to display
    return debits.map((debit) => {
      return <DebitsCard className="container" key={debit.id} description={debit.description} amount={debit.amount} date={debit.date.substring(0,10)}/>
    }); 
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h2>Debits Page</h2>
      </header >

      <div style={{textAlign: "center"}}>
        {generateDebits()}
      </div>
    </div >

    
  )
}

export default DebitsPage
