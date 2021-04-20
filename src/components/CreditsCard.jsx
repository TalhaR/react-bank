import React from 'react'

const CreditsCard = ({description, amount, date}) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <h2> {description} </h2>
      </div>
      <div>
        <h5> Credit amount: {amount} </h5>
        <h5> Date: {date} </h5>
      </div>
    </div>
  )
}

export default CreditsCard
