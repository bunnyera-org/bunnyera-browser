const users = [];

export function createUser(email){
  const user = {
    email,
    createdAt: new Date().toISOString()
  };
  users.push(user);
  return user;
}

export function listUsers(){
  return users;
}
