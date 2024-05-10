export const postApi = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => data)
        .catch((error) => null);
}