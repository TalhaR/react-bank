import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <img
                src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png"
                alt="bank"
            />
            <h1>Bank of React</h1>
            <Link to="/debits">Debits Page</Link>
        </div>
    );
}

export default Home;
