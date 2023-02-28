export const fetchAuthToken = async (setToken: (arg0: any) => void) => {  
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: 'jacob',
        password: 'password'
      })
    });
    const json = await response.json();
    setToken(json.authToken);
  } catch (error) {
    console.log("error", error);
  }
};
