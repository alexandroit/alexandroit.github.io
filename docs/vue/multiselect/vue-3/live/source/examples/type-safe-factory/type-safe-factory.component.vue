<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <VueMultiselectDropdown :data="countries" v-model="selected" :settings="settings" @change="record('change', $event)" />
    <p class="factory-note">The helper keeps settings and composables shaped around the same item contract.</p>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown, createVueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel } from '../../shared/settings';
import { meta } from './type-safe-factory.data';
import componentSource from './type-safe-factory.component.vue?raw';
import dataSource from './type-safe-factory.data.js?raw';
import styleSource from './type-safe-factory.component.css?raw';
import './type-safe-factory.component.css';

const stackline = createVueMultiselectDropdown();
const selected = ref(countries.slice(0, 3));
const events = ref([]);
const settings = stackline.defineSettings({
  text: 'Typed helper countries',
  primaryKey: 'id',
  labelKey: 'itemName',
  enableSearchFilter: true,
  badgeShowLimit: 3,
  skin: 'classic'
});
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
</script>
