import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Headless HTML",
  title: "100% custom HTML with ARIA getters",
  description: "Use Stackline state, filtering, grouping, keyboard handling, ARIA ids, and callbacks while owning every element and class."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Headless and ARIA", {
  enableSearchFilter: true,
  text: "Headless and ARIA"
});
