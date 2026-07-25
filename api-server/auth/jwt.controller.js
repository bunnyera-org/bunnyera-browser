export function login(email){
  return {
    token: "jwt-"+Date.now(),
    email
  };
}
