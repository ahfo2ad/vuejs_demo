<template>
  <div class="main">
    <!-- <TheNav /> -->
    <!-- <nav-bar></nav-bar> -->
    <!-- <h2>main page</h2> -->
    <MyCont :stds="students" :name="page_name" />
  </div>
</template>

<!-- to import it only in this view  -->
<!-- <script>
import TheNav from "@/components/NavBar.vue";
export default {
  name: "MainPage",
  components: {
    TheNav,
  },
};
</script> -->

<!-- to import it in all views  -->
<script>
import MyCont from "@/components/MyContent.vue";
export default {
  name: "MainPage",
  components: {
    MyCont,
  },
  data() {
    return {
      students: ["ahmed", "fouad", "mohamed"],
      page_name: "main",
    };
  },
};
</script>
