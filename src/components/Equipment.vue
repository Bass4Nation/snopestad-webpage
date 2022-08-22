<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
<h3>{{name}}</h3>
</template>