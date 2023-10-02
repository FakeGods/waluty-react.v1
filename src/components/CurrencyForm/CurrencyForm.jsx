import React from "react";
import "./CurrencyForm.css";

function CurrencyForm({
  selectedCurrency,
  amount,
  handleCurrencyChange,
  handleAmountChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} id="currencyForm">
      <div className="currency-container">
        <label htmlFor="currency">Wybierz walutę:</label>
        <select
          id="currency"
          name="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="EUR">Euro (EUR)</option>
          <option value="USD">Dolary amerykańskie (USD)</option>
          <option value="CHF">Franki szwajcarskie (CHF)</option>
        </select>
      </div>
      <div className="amount-container">
        <label htmlFor="amount">Wprowadź kwotę:</label>
        <input
          type="number"
          placeholder="Kwota"
          id="amount"
          name="amount"
          min="0.01"
          step="0.01"
          pattern="\d+(\.\d{1,2})?"
          required
          value={amount}
          onChange={handleAmountChange}
        />
        <button type="submit">Przelicz</button>
      </div>
    </form>
  );
}

export default CurrencyForm;
