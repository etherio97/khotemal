<template>
  <v-overlay :value="!loaded">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  props: {
    loaded: {
      required: true,
      type: Boolean,
    },
  },
};
</script>
