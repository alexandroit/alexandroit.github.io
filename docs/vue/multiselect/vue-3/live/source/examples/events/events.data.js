import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Events",
  title: "Events",
  description: "Record open, close, select, deselect, select-all, and clear-all callbacks."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Events", {
  enableSearchFilter: true,
  text: "Events",
  badgeShowLimit: 3
});
