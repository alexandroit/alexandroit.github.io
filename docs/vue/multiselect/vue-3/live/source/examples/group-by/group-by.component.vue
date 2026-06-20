<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './group-by.data';
import componentSource from './group-by.component.vue?raw';
import dataSource from './group-by.data.js?raw';
import styleSource from './group-by.component.css?raw';
import './group-by.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('group-by')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
</script>
