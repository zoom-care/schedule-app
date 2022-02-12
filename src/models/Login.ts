export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginResponse {
    username: string;
    authToken: string;
}