/*
Formats number to have ',' in it.
Input: 1000 <number>
Output: '1,000' <string>
*/

export default function formatUnits(amount: number) {
    const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedAmount;
}