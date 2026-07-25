export function createToken(user){
  return {
    token:"jwt-"+user.id,
    user
  };
}
