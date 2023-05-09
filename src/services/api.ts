
// If I were using a library to make requests, I would define an interceptor to avoid passing the token to every API call
export async function fetchData(url: string, token: string) {
    const response = await fetch(url, { method: 'GET', headers: {'Authorization': token} })
    if (!response.ok) {
        throw new Error((await response.json()).error);
    }
    return await response.json();
}