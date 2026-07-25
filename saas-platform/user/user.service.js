const users = [];

export function createUser(data){
  const user = {
    id: Date.now(),
    ...data,
    createdAt: new Date().toISOString()
  };
  users.push(user);
  return user;
}

export function listUsers(){
  return users;
}
