/*
This function formats the date given and returns a string.
Input: 'MM-DD-YYYY' | 'DD-MM-YYYY' | 'YYYY-DD-MM' <string>
Output: 'MM-DD-YYYY' <string>
*/

export default function formatDate(date: string) {
    const [year, month, day] = date.split('-')

    return `${month}-${day}-${year}`;
}