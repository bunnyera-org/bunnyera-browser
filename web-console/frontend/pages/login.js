export function login(email, password){
  return {
    email,
    authenticated: true,
    token: "jwt-session-token"
  };
}
