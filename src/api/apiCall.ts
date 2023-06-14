export async function fetchData(url: string, token: string) {
  const response = await fetch(url, {
    method: 'GET',
    headers: { Authorization: token },
  });
  if (!response.ok) {
    throw new Error((await response.json()).error);
  }
    
  return await response.json();
}
