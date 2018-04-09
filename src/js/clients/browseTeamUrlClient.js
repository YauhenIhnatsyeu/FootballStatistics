import browse from "Helpers/browseHelper";

export default function browseUrl(currentPath, newPath, history) {
    const regexp = /\/([A-Z]|[a-z]|0-9])*$/;
    const newUrl = currentPath.replace(regexp, newPath);
    browse(newUrl, history);
}
