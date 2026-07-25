export class BrowserAgent {
  constructor(){
    this.name = "BunnyEra AI Browser Agent";
  }

  async run(task){
    return {
      task,
      status:"planned",
      message:"AI agent task created"
    };
  }
}
