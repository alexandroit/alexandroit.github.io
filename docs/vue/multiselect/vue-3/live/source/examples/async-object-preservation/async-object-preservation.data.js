import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Async contract",
  title: "Async object preservation",
  description: "Refresh the option source while selected objects stay intact, then add a new item from search."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Async object preservation", {
  enableSearchFilter: true,
  text: "Async object preservation",
  groupBy: "category",
  selectGroup: true,
  badgeShowLimit: 3,
  maxHeight: 180
});
