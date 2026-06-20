<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="method-demo">
      <div class="method-bar">
        <button type="button" @click="dropdown.openDropdown()">Open</button>
        <button type="button" @click="dropdown.closeDropdown()">Close</button>
        <button type="button" @click="dropdown.focusSearch()">Focus search</button>
        <button type="button" @click="dropdown.selectAll()">Select all</button>
        <button type="button" @click="dropdown.clearSelection()">Clear</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="countries"
        v-model="selected"
        :settings="settings"
        @change="record('change', $event)"
      />
    </div>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './methods.data';
import componentSource from './methods.component.vue?raw';
import dataSource from './methods.data.js?raw';
import styleSource from './methods.component.css?raw';
import './methods.component.css';

const dropdown = ref(null);
const selected = ref(countries.slice(0, 2));
const events = ref([]);
const settings = makeSettings('classic', 'Methods example', { badgeShowLimit: 3 });
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
</script>
