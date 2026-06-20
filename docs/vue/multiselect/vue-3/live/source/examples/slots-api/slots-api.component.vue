<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <VueMultiselectDropdown
      :data="countries"
      v-model="selected"
      :settings="settings"
      @change="record('change', $event)"
    >
      <template #option="{ item, label, selected: optionSelected }">
        <span class="slot-option">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          <span>
            <strong>{{ label }}</strong>
            <small>{{ item.capital }} - {{ item.region }}</small>
          </span>
          <b>{{ optionSelected ? 'Selected' : 'Available' }}</b>
        </span>
      </template>
      <template #badge="{ item, label, remove }">
        <span class="slot-badge">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ label }}
          <button type="button" @click.stop="remove">x</button>
        </span>
      </template>
      <template #group-header="{ group, selected: groupSelected, selectGroup }">
        <button class="slot-group" type="button" @click="selectGroup">
          {{ group.name }} - {{ group.items.length }} options - {{ groupSelected ? 'selected' : 'select group' }}
        </button>
      </template>
    </VueMultiselectDropdown>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './slots-api.data';
import componentSource from './slots-api.component.vue?raw';
import dataSource from './slots-api.data.js?raw';
import styleSource from './slots-api.component.css?raw';
import './slots-api.component.css';

const selected = ref(countries.slice(0, 4));
const events = ref([]);
const settings = makeSettings('classic', 'Scoped slot countries', {
  groupBy: 'category',
  selectGroup: true,
  badgeShowLimit: 2
});
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}
</script>
