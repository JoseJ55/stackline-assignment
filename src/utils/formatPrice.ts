export default function formatPrice(amount: number) {
    const [integerPart] = amount.toFixed(2).toString().split('.');

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `$${formattedIntegerPart}`;
}