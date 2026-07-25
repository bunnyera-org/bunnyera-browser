export function connectPostgres(config){
  return {
    database:"postgresql",
    connected:true,
    config
  };
}
