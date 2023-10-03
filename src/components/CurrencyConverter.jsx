import React, { useState } from "react";
import CurrencyForm from "./CurrencyForm/CurrencyForm";
import Loader from "./Loader/Loader";
import Result from "./Result/Result";
import fetchCurrency from "./api/api";

function CurrencyConverter() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const rate = await fetchCurrency(selectedCurrency);
      const convertedAmount = (amount * rate).toFixed(2);
      setResult(`${amount} ${selectedCurrency} to ${convertedAmount} PLN`);
    } catch (error) {
      setResult(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Przelicznik walut</h1>
      <CurrencyForm
        selectedCurrency={selectedCurrency}
        amount={amount}
        handleCurrencyChange={handleCurrencyChange}
        handleAmountChange={handleAmountChange}
        handleSubmit={handleSubmit}
      />
      <Loader loading={loading} />
      <Result result={result} />
    </div>
  );
}

export default CurrencyConverter;
