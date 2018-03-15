export default function checkForFetchErrors(response) {
    if (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    }
    return response;
}