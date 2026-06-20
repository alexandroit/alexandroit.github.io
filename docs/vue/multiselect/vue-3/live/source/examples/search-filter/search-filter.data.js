import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Search",
  title: "Search filter",
  description: "Search across country names and capitals while keeping controlled Vue state."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search filter", {
  enableSearchFilter: true,
  text: "Search filter",
  badgeShowLimit: 3
});
