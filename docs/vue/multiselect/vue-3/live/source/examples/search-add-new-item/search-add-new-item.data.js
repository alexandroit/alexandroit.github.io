import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Dynamic input",
  title: "Search and Add New Item",
  description: "Create a new item from the current search query and keep it in local Vue state."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search and add new item", {
  enableSearchFilter: true,
  text: "Search and add new item",
  addNewItemOnFilter: true,
  addNewButtonText: "Add country"
});
