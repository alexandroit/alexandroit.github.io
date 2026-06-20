<template>
  <main class="page shell-page">
    <header class="topbar">
      <p class="eyebrow">Vue 3.5.38 runtime</p>
      <h1>@stackline/vue-multiselect-dropdown 3.1.4</h1>
    </header>

    <section class="docs-main">
      <component :is="currentRoute.component" />
    </section>

    <footer class="example-footer" aria-label="Vue 3 example routes">
      <div class="footer-heading">
        <p class="eyebrow">Example routes</p>
        <h2>Open a focused Vue 3 example</h2>
      </div>

      <nav class="footer-link-grid">
        <a
          v-for="route in routes"
          :key="route.slug"
          :href="'/' + route.slug"
          :class="{ active: route.slug === currentRoute.slug }"
          @click.prevent="navigate(route.slug)"
        >
          <span class="route-title">{{ route.title }}</span>
          <span class="route-path">/{{ route.slug }}</span>
        </a>
      </nav>
    </footer>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { allRoutes, routes } from './app/routes';

function readSlug() {
  const hashSlug = window.location.hash.replace(/^#\/?/, '');
  if (hashSlug) {
    return hashSlug;
  }
  return window.location.pathname.replace(/^\/+|\/+$/g, '') || 'basic';
}

const slug = ref(readSlug());
const currentRoute = computed(() => allRoutes.find((route) => route.slug === slug.value) || routes[0]);

function syncRoute() {
  slug.value = readSlug();
}

function navigate(nextSlug) {
  window.history.pushState(null, '', '/' + nextSlug);
  slug.value = nextSlug;
  window.scrollTo({ top: 0, left: 0 });
}

onMounted(() => {
  window.addEventListener('hashchange', syncRoute);
  window.addEventListener('popstate', syncRoute);
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncRoute);
  window.removeEventListener('popstate', syncRoute);
});
</script>
