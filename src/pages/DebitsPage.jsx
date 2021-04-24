import React, { useState, useEffect } from 'react'
import DebitsCard from '../components/DebitsCard';
import AccountBalanceCard from '../components/AccountBalanceCard';
import DebitsInputCard from '../components/DebitsInputCard';
const axios = require('axios');

const DebitsPage = () => {
  const [debits, setDebits] = useState([]);
  const [descriptionField, setDescriptionField] = useState("");
  const [amountField, setAmountField] = useState("");

  useEffect(() => {
    document.title = "Debits"; // sets the title of the page to Debits

    const getDebits = async () => { // call the api whenever the page loads and store data in debits
      let res = await axios.get('https://moj-api.herokuapp.com/debits');
      setDebits(res.data);
    }

    getDebits();
  }, [])

  const generateDebits = () => { // generate a list of cards for the page to display
    return debits.map((debit) => {
      return <DebitsCard key={debit.id} description={debit.description} amount={debit.amount} date={debit.date.substring(0,10)}/>
    }); 
  }

  const handleSubmit = (e) => { // handles submissions
    e.preventDefault();
    let newDate = new Date();
    newDate = newDate.toJSON();
    let arr = [...debits];
    arr.push({amount: amountField, date: newDate, description: descriptionField, id: newDate});
    setDebits(arr);
  }

  const handleDescriptionChange = (e) => { // changes state when user inputs descriptions
    setDescriptionField(e.target.value);
  }

  const handleAmountChange = (e) => { // changes state when user inputs descriptions
    setAmountField(e.target.value);
  }

  const [credits, setCredits] = useState([]);
  useEffect(() => {
    document.title = "Credits"; // sets the title of the page to Credit

    const getCredits = async () => { // call the api whenever the page loads and store data in credits
      let res = await axios.get('https://moj-api.herokuapp.com/credits');
      setCredits(res.data);
    }

    getCredits();
  }, [])

  const generateAccountBalance = () => { 
    let sum = 0; 
    let val = 0.00;

    let temp = credits.map((credit) => { 
      return credit.amount; 
    });

    for (let i = 0; i < temp.length; i++) { 
      val = Number(temp[i]);
      sum += val;
      sum = Math.round(sum * 100) / 100;
    }

    temp = debits.map((debit) => { 
      return debit.amount; 
    });
    
    for (let i = 0; i < temp.length; i++) { 
      val = Number(temp[i]);
      sum -= val;
      sum = Math.round(sum * 100) / 100;
    }

    return <AccountBalanceCard amount={sum}/>;
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h2>Debits Page</h2>
      </header >
      <div style={{textAlign: "center"}}>
        {generateAccountBalance()}
        <DebitsInputCard handleSubmit={handleSubmit} handleDescriptionChange={handleDescriptionChange} handleAmountChange={handleAmountChange}/>
        {generateDebits()}
      </div>
    </div >

    
  )
}

export default DebitsPage
