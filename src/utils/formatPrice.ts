/*
This function format a number and formats it to the nearest dollar.
Input: 10000 <number>
OutPut: '$10,000' <string>
*/

export default function formatPrice(amount: number) {
    const [integerPart] = amount.toFixed(2).toString().split('.');

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `$${formattedIntegerPart}`;
}