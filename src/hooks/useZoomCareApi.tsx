import { Login } from '../model/login.interface'
const API_URL = '/api';

const useZoomCareApi = () => {
    async function onSignIn({ username, password }: Login){
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const authData = await response.json();
        return authData;
    }

    function onSignOut(){

    }

    return {
        signIn : (props : Login) => onSignIn(props),
        signOut : () => onSignOut()
    }
}

export default useZoomCareApi;
