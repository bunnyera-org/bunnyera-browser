<template>
  <div class="browser-card">
    <h3>{{ profileId }}</h3>
    <p>Status: {{ status }}</p>
    <button @click="$emit('start', profileId)">Start</button>
    <button @click="$emit('stop', profileId)">Stop</button>
  </div>
</template>

<script>
export default {
  props: {
    profileId: String,
    status: String
  }
}
</script>
