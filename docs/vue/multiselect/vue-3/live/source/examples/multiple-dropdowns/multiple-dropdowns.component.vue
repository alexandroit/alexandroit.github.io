<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="multi-grid">
      <VueMultiselectDropdown :data="countries" v-model="markets" :settings="marketSettings" @change="record('markets change', $event)" />
      <VueMultiselectDropdown :data="skills" v-model="skillSelection" :settings="skillSettings" @change="record('skills change', $event)" />
    </div>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries, skills } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './multiple-dropdowns.data';
import componentSource from './multiple-dropdowns.component.vue?raw';
import dataSource from './multiple-dropdowns.data.js?raw';
import styleSource from './multiple-dropdowns.component.css?raw';
import './multiple-dropdowns.component.css';

const markets = ref(countries.slice(0, 3));
const skillSelection = ref(skills.slice(0, 2));
const events = ref([]);
const marketSettings = makeSettings('classic', 'Markets', { badgeShowLimit: 3 });
const skillSettings = makeSettings('material', 'Skills', { badgeShowLimit: 2 });
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
</script>
