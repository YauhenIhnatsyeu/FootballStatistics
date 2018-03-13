//Extracts id from the ending of the team url
export default function extractTeamIdFromUrl(url) {
    const regEx = /\d+$/;
    const ids = regEx.exec(url);
    return ids.length > 0 ? ids[0] : 0;
}