<template>
  <nav class="main-nav">
    <div class="icons">icon</div>
    <div class="logo">logo</div>
    <div class="links">
      <ul>
        <li v-for="(link, i) in links" :key="i">{{ link }}</li>
      </ul>
    </div>
  </nav>
</template>

<style>
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-nav ul {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      logo: "logo",
      links: ["link1", "link2"],
    };
  },
};
</script>
