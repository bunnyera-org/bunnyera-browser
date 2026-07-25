<template>
  <div>
    <h1>BunnyEra Browser Console</h1>

    <BrowserCard
      v-for="item in browsers"
      :key="item.profileId"
      :profileId="item.profileId"
      :status="item.status"
      @start="startBrowser"
      @stop="stopBrowser"
    />
  </div>
</template>

<script>
import BrowserCard from "../components/BrowserCard.vue";

export default {
  components:{BrowserCard},
  data(){
    return {
      browsers:[]
    }
  },
  methods:{
    async load(){
      const res = await fetch("http://localhost:8080/api/browser");
      this.browsers = await res.json();
    },
    async startBrowser(profileId){
      await fetch("http://localhost:8080/api/browser/start",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({profileId})
      });
      this.load();
    },
    async stopBrowser(profileId){
      await fetch("http://localhost:8080/api/browser/stop",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({profileId})
      });
      this.load();
    }
  },
  mounted(){
    this.load();
  }
}
</script>
