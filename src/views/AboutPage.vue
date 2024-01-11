<template>
  <div class="about">
    <!-- <h2>about page</h2> -->
    <MyCont :stds="students" :name="page_name" />
  </div>
</template>

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
      students: ["xxxxx", "yyyy", "zzzzzz"],
      page_name: "about",
    };
  },
};
</script>
