export class AgentOrchestrator {
  constructor(){
    this.agents = [];
  }

  register(agent){
    this.agents.push(agent);
  }

  async dispatch(task){
    return {
      task,
      agents: this.agents.map(a => a.name),
      status: "assigned"
    };
  }
}
