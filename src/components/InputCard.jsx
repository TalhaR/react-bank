import React from 'react'

const InputCard = ({ type, handleSubmit, handleDescriptionChange, handleAmountChange }) => {
  return (
      <div className="card">
          <form onSubmit={handleSubmit}>
              <div className="cardHeader">
                  <h2>
                      <label>
                          Description:{" "}
                          <input
                              type="text"
                              name="description"
                              onChange={handleDescriptionChange}
                          />
                      </label>
                  </h2>
              </div>

              <div>
                  <h5>
                      <label>
                          {type} amount:{" "}
                          <input
                              type="text"
                              name="amount"
                              onChange={handleAmountChange}
                          />
                      </label>
                  </h5>
                  <input type="submit" value="Submit" />
              </div>
              <br />
          </form>
      </div>
  );
}

export default InputCard
