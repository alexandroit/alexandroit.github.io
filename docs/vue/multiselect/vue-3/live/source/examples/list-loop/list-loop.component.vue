<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="loop-grid">
      <section v-for="row in rows" :key="row.region" class="loop-card">
        <h2>{{ row.region }}</h2>
        <VueMultiselectDropdown
          :data="row.items"
          v-model="row.selected"
          :settings="row.settings"
          @change="record(row.region + ' change', $event)"
        />
      </section>
    </div>
  </ExampleShell>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './list-loop.data';
import componentSource from './list-loop.component.vue?raw';
import dataSource from './list-loop.data.js?raw';
import styleSource from './list-loop.component.css?raw';
import './list-loop.component.css';

const rows = reactive(['Americas', 'Europe', 'Africa'].map((region) => {
  const items = countries.filter((item) => item.category === region);
  return {
    region,
    items,
    selected: items.slice(0, 2),
    settings: makeSettings('classic', region + ' markets', { badgeShowLimit: 2 })
  };
}));
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
</script>
