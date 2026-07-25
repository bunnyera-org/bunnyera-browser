const keys=[];

export function createKey(owner){
  const key="BE_"+Date.now();

  keys.push({
    owner,
    key
  });

  return key;
}

export function listKeys(){
  return keys;
}
