<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="headless-shell" v-bind="dropdown.getRootProps()">
      <div class="headless-toolbar">
        <span>{{ selected.length }} selected</span>
        <button v-bind="dropdown.getClearAllButtonProps()" :disabled="!selected.length">Clear all</button>
      </div>

      <button class="headless-trigger" v-bind="dropdown.getTriggerProps()">
        <span>
          <small>Country filter</small>
          <strong>{{ label }}</strong>
        </span>
        <b>{{ isOpen ? 'Close' : 'Open' }}</b>
      </button>

      <div class="headless-chips" aria-live="polite">
        <span v-for="item in visibleBadges" :key="dropdown.getItemKey(item)" class="headless-chip">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ dropdown.getItemLabel(item) }}
          <button v-bind="dropdown.getRemoveButtonProps(item)">x</button>
        </span>
        <span v-if="hiddenBadgeCount" class="headless-counter">+{{ hiddenBadgeCount }}</span>
      </div>

      <div v-if="isOpen" class="headless-panel">
        <label class="headless-search-label" :for="dropdown.listboxId + '-search'">Search</label>
        <input
          class="headless-search"
          v-bind="dropdown.getSearchInputProps({ id: dropdown.listboxId + '-search' })"
        />

        <div class="headless-listbox" v-bind="dropdown.getListboxProps()">
          <section v-for="group in groups" :key="group.name" class="headless-group">
            <div class="headless-group-head">
              <span>{{ group.name }}</span>
              <button type="button" @click="dropdown.toggleGroup(group.name, group.items.map((option) => option.item))">
                {{ group.selected ? 'Clear group' : 'Select group' }}
              </button>
            </div>

            <div
              v-for="option in group.items"
              :key="option.key"
              :class="['headless-option', { selected: option.selected }]"
              v-bind="dropdown.getOptionProps(option)"
            >
              <span class="headless-check" :data-checked="option.selected ? 'true' : 'false'" aria-hidden="true"></span>
              <span :class="countryOptionClass(option.item.flag)" aria-hidden="true"></span>
              <span class="headless-option-copy">
                <strong>{{ option.label }}</strong>
                <small>{{ option.item.capital }} · {{ option.item.region }}</small>
              </span>
              <code>selected={{ String(option.selected) }}</code>
            </div>
          </section>
        </div>
      </div>
    </section>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, makeSettings } from '../../shared/settings';
import { meta } from './headless-aria.data';
import componentSource from './headless-aria.component.vue?raw';
import dataSource from './headless-aria.data.js?raw';
import styleSource from './headless-aria.component.css?raw';
import './headless-aria.component.css';

const selected = ref(countries.slice(0, 3));
const events = ref([]);
const dropdown = useMultiSelectDropdown({
  data: countries,
  selectedItems: selected,
  onChange(items) {
    selected.value = items;
    events.value.unshift('headless change: ' + items.length + ' selected');
  },
  settings: makeSettings('classic', 'Choose countries', {
    enableSearchFilter: true,
    groupBy: 'category',
    selectGroup: true,
    badgeShowLimit: 2,
    clearAll: true,
    ariaLabel: 'Headless countries'
  })
});
const label = dropdown.label;
const isOpen = dropdown.isOpen;
const visibleBadges = dropdown.visibleBadges;
const hiddenBadgeCount = dropdown.hiddenBadgeCount;
const groups = dropdown.groups;
const sources = { component: componentSource, data: dataSource, css: styleSource };
</script>
