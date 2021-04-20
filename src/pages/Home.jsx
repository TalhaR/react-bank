import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App-header" style={{ height: "100vh" }}>
      <img
        // This image-link doesn't work so we provided our own
        // src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png"
        src="https://media.istockphoto.com/vectors/bank-building-isolated-on-white-background-vector-illustration-flat-vector-id900791430?k=6&m=900791430&s=612x612&w=0&h=i8p6EfGRaDb86Z5dyGgURWVi--2KFYuoVjNJUHnrChk="
        alt="bank"
      />
      <h1>Bank of React</h1>
      <Link to="/credits">
        <button type="button" style={{padding: "10px 10px", fontSize: '16px'}}> Credits Page </button>
      </Link>

      <Link to="/debits">
        <button type="button" style={{padding: "10px 10px", fontSize: '16px'}}> Debits Page </button>
      </Link>
    </div>
  );
}

export default Home;
