import { Login, LoginResponse } from "../zoomcare-api";

export async function login(credentials: Login): Promise<LoginResponse> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
  return await response.json()
}