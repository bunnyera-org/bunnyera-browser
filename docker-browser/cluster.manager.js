const containers = [];

export function createBrowserContainer(config){
  const container = {
    id:"browser-"+Date.now(),
    config,
    status:"running"
  };

  containers.push(container);
  return container;
}

export function listContainers(){
  return containers;
}
