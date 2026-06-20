<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="state-hook-demo">
      <div class="state-toolbar">
        <input v-model="filter" type="search" placeholder="Filter countries" />
        <button type="button" @click="state.selectAll(filteredItems)">Select filtered</button>
        <button type="button" @click="state.deSelectAll(filteredItems)">Clear filtered</button>
      </div>
      <div class="state-selected">
        <span v-for="item in visibleBadges" :key="state.getItemKey(item)" class="state-chip">
          {{ state.getItemLabel(item) }}
          <button type="button" @click="state.removeItem(item)">x</button>
        </span>
        <span v-if="hiddenBadgeCount" class="state-counter">+{{ hiddenBadgeCount }}</span>
      </div>
      <div class="state-options">
        <button v-for="item in filteredItems" :key="state.getItemKey(item)" type="button" :class="{ selected: state.isSelected(item) }" @click="state.toggleItem(item)">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ state.getItemLabel(item) }}
        </button>
      </div>
    </section>
  </ExampleShell>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useMultiSelectState } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, makeSettings } from '../../shared/settings';
import { meta } from './state-hook.data';
import componentSource from './state-hook.component.vue?raw';
import dataSource from './state-hook.data.js?raw';
import styleSource from './state-hook.component.css?raw';
import './state-hook.component.css';

const selected = ref(countries.slice(0, 4));
const events = ref([]);
const state = useMultiSelectState({
  data: countries,
  selectedItems: selected,
  onChange(items) {
    selected.value = items;
    events.value.unshift('state change: ' + items.length + ' selected');
  },
  settings: makeSettings('classic', 'State hook countries', { badgeShowLimit: 3 })
});
const filter = state.filter;
const filteredItems = state.filteredItems;
const visibleBadges = state.visibleBadges;
const hiddenBadgeCount = state.hiddenBadgeCount;
watch(filter, (value) => state.setFilter(value));
const sources = { component: componentSource, data: dataSource, css: styleSource };
</script>
