async function fetchCurrency(selectedCurrency) {
  const response = await fetch(
    `https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/?format=json`
  );
  if (!response.ok) {
    throw new Error("Błąd pobierania kursu waluty.");
  }
  const data = await response.json();
  const rate = data.rates[0].mid;

  return rate;
}

export default fetchCurrency;
