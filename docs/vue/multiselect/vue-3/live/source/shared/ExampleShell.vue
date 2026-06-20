<template>
  <section class="skin-section">
    <div class="section-heading">
      <p class="eyebrow">{{ meta.eyebrow || 'Vue example' }}</p>
      <h2>{{ meta.title }}</h2>
      <p class="example-copy">{{ meta.description }}</p>
      <a class="stackblitz-row-link" :href="stackblitzUrl" target="_blank" rel="noopener">Open this route in StackBlitz</a>
    </div>

    <article class="example-row">
      <div class="demo-cell">
        <slot />
      </div>
      <div class="code-cell">
        <SourcePanels :sources="sources" />
      </div>
    </article>
  </section>

  <section v-if="events.length" class="activity">
    <h2>Event log</h2>
    <p v-for="(event, index) in events" :key="event + index">{{ event }}</p>
  </section>

  <section v-else class="activity">
    <h2>Event log</h2>
    <p>ready</p>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import SourcePanels from './SourcePanels.vue';

const props = defineProps({
  meta: {
    type: Object,
    required: true
  },
  sources: {
    type: Object,
    required: true
  },
  events: {
    type: Array,
    default: () => []
  }
});

const stackblitzUrl = computed(() => {
  const hashSlug = window.location.hash.replace(/^#\/?/, '');
  const slug = hashSlug || window.location.pathname.replace(/^\/+|\/+$/g, '') || 'basic';
  const file = encodeURIComponent('src/examples/' + slug + '/' + slug + '.component.vue');
  return 'https://stackblitz.com/github/alexandroit/stackline-vue-multiselect-vue-3?file=' + file + '&startScript=start&initialpath=' + encodeURIComponent('/' + slug);
});
</script>
