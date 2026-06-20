<template>
  <div class="code-grid">
    <section class="code-card">
      <strong>Vue</strong>
      <pre>{{ sources.component }}</pre>
    </section>
    <section class="code-card">
      <strong>Data</strong>
      <pre>{{ sources.data }}</pre>
    </section>
    <section class="code-card">
      <strong>CSS</strong>
      <pre>{{ sources.css || '/* No custom CSS for this example. */' }}</pre>
    </section>
  </div>
</template>

<script setup>
defineProps({
  sources: {
    type: Object,
    required: true
  }
});
</script>
