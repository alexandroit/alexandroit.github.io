<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="styling-demo">
      <div class="skin-buttons">
        <button v-for="item in skins" :key="item" type="button" :class="{ active: skin === item }" @click="skin = item">{{ item }}</button>
      </div>
      <VueMultiselectDropdown :data="countries" v-model="selected" :settings="settings" @change="record('change', $event)" />
      <p><code>settings.skin: '{{ skin }}'</code></p>
    </section>
  </ExampleShell>
</template>

<script setup>
import { computed, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './styling.data';
import componentSource from './styling.component.vue?raw';
import dataSource from './styling.data.js?raw';
import styleSource from './styling.component.css?raw';
import './styling.component.css';

const skins = ['classic', 'material', 'dark', 'custom', 'brand'];
const skin = ref('classic');
const selected = ref(countries.slice(0, 3));
const events = ref([]);
const settings = computed(() => makeSettings(skin.value, 'Skinned dropdown', { badgeShowLimit: 3 }));
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
</script>
