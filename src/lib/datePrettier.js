export default function datePrettier(timestamp, longDate = true) {
    if (!timestamp) return '-';

    const date = new Date(parseInt(timestamp, 10));

    if (isNaN(date.getTime())) {
        return '-';
    }

    const options = {
        weekday: longDate ? 'long' : undefined,
        day: 'numeric',
        month: longDate ? 'long' : 'short',
        year: 'numeric',
    };

    let formattedDate = date.toLocaleString('en-US', options).trim();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} - ${formattedTime}`;
}
