<template>
  <span class="badge" :class="['badge--' + mode, {nml: noMarginLeft}]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['mode', 'noMarginLeft']
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
  border-radius: 30px;
}

.nml {
  margin-left: 0;
}

.badge--highlight {
  background: #424242;
  color: #fff;
}

.badge--elegant {
  background-color: green;
  color: white;
  font-weight: bold;
}
</style>