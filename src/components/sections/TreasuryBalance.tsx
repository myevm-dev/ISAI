import React from "react";
import "./TreasuryBalance.css";

interface TreasuryBalanceProps {
  balance: string; // You can use a number if the balance is numeric
  description?: string;
}

const TreasuryBalance: React.FC<TreasuryBalanceProps> = ({
  balance,
  description = "Current Treasury Balance",
}) => {
  return (
    <div className="treasury-balance-container">
      <h3 className="treasury-balance-title">{description}</h3>
      <div className="treasury-balance-amount">${balance}</div>
    </div>
  );
};

export default TreasuryBalance;
