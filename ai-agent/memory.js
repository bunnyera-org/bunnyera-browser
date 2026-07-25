const memory = [];

export function saveMemory(item){
  memory.push({
    item,
    createdAt:new Date().toISOString()
  });
}

export function getMemory(){
  return memory;
}
