import React from "react";

const Button = ({ selectQuote }) => {
  return (
    <div>
      <button onClick={selectQuote}>Give me simpsons Quote</button>
    </div>
  );
};

export default Button;
