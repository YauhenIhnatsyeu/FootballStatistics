export function getValue(key) {
    const item = localStorage.getItem(key);

    if (item) {
        return JSON.parse(item);
    }

    return undefined;
}

export function pushValue(key, value) {
    let item = localStorage.getItem(key);

    if (item) {
        item = JSON.parse(item);
        item.push(value);
        item = JSON.stringify(item);
    } else {
        item = JSON.stringify([value]);
    }

    localStorage.setItem(key, item);
}

export function removeValue(key, value) {
    let item = localStorage.getItem(key);

    if (item) {
        item = JSON.parse(item);
        const indexOfValue = item.indexOf(value);

        if (indexOfValue !== -1) {
            item.splice(indexOfValue, 1);
            item = JSON.stringify(item);
            localStorage.setItem(key, item);
        }
    }
}
