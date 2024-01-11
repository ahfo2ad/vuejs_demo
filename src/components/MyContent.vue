<template>
  <div class="container">
    <h2>{{ name }} page</h2>
    <ul>
      <li v-for="(student, i) in stds" :key="i">{{ student }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["stds", "name"],
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
}
</style>
