const clusters = [];

export function createCluster(region){
  const cluster = {
    id: "cluster-" + Date.now(),
    region,
    status: "creating",
    createdAt: new Date().toISOString()
  };

  clusters.push(cluster);
  return cluster;
}

export function listClusters(){
  return clusters;
}
