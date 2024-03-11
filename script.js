const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

//Array to populate the selected tags with these countries
const countries = [
    {code: "USD", name: "United States Dollar"},
    {code: "INR", name: "Indian Rupee"}
];

//Showing countries from array to select tag
countries.forEach(country => {
    const option1 = document.querySelector('option');
})