import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Search fields",
  title: "Search filter by property",
  description: "Use settings.searchBy so the filter checks name, capital, and region fields."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search filter by property", {
  enableSearchFilter: true,
  text: "Search filter by property",
  searchBy: [
    "itemName",
    "region",
    "capital"
  ]
});
