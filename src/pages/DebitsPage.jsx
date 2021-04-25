import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import AccountBalanceCard from "../components/AccountBalanceCard";
import InputCard from "../components/InputCard";
import { Link } from "react-router-dom";
const axios = require("axios");

const DebitsPage = () => {
    const [debits, setDebits] = useState([]);
    const [credits, setCredits] = useState([]);
    const [descriptionField, setDescriptionField] = useState("");
    const [amountField, setAmountField] = useState("");

    useEffect(() => {
        document.title = "Debits"; // sets the title of the page to Debits

        const getDebits = async () => {
            // call the api whenever the page loads and store data in debits
            let res = await axios.get("https://moj-api.herokuapp.com/debits");
            setDebits(res.data);
        };

        const getCredits = async () => {
            // call the api whenever the page loads and store data in credits
            let res = await axios.get("https://moj-api.herokuapp.com/credits");
            setCredits(res.data);
        };

        getCredits();
        getDebits();
    }, []);

    const generateDebits = () => {
        // generate a list of cards for the page to display
        return debits.map((debit) => {
            return (
                <Card
                    type="Debit"
                    key={debit.id}
                    description={debit.description}
                    amount={debit.amount}
                    date={debit.date.substring(0, 10)}
                />
            );
        });
    };

    const handleSubmit = (e) => {
        // handles submissions
        e.preventDefault();
        let newDate = new Date();
        newDate = newDate.toJSON();
        let arr = [...debits];
        arr.push({
            amount: amountField,
            date: newDate,
            description: descriptionField,
            id: newDate,
        });
        setDebits(arr);
    };

    const handleDescriptionChange = (e) => {
        // changes state when user inputs descriptions
        setDescriptionField(e.target.value);
    };

    const handleAmountChange = (e) => {
        // changes state when user inputs descriptions
        setAmountField(e.target.value);
    };

    const generateAccountBalance = () => {
        let sum = 0;
        let val = 0.0;

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

        return <AccountBalanceCard amount={sum} />;
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Debits Page</h2>
            </header>
            <br /> 
            <Link to="/" style={{display: "flex", justifyContent: "center"}}>
                <button
                    type="button"
                    style={{ padding: "10px 10px", fontSize: "16px" }}
                >
                    Home
                </button>
            </Link>
            <div style={{ textAlign: "center" }}>
                {generateAccountBalance()}
                <InputCard
                    type="Debit"
                    handleSubmit={handleSubmit}
                    handleDescriptionChange={handleDescriptionChange}
                    handleAmountChange={handleAmountChange}
                />
                {generateDebits()}
            </div>
        </div>
    );
};

export default DebitsPage;
