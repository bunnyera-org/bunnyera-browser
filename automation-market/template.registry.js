const templates=[];

export function registerTemplate(template){
  templates.push(template);
}

export function listTemplates(){
  return templates;
}
