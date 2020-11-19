<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h3>Hello: {{ greeting }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => {
    return {
      greeting: "hello world!",
    };
  },
});
</script>
