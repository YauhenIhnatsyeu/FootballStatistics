export default function (date) {
    return date.toISOString().slice(0, 10);
}