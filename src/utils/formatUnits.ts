export default function formatUnits(amount: number) {
    const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedAmount;
}