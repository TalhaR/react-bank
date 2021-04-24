import React from 'react'

const AccountBalanceCard = ({amount}) => {
  return (
    <div className="card2">
      <div className="cardHeader">
        <h1> Account Balance </h1>
      </div>
      <div>
        <h5> Current Balance: {amount} </h5>
      </div>
    </div>
  )
}

export default AccountBalanceCard