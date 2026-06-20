import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "ARIA audit",
  title: "aria-selected plus aria-checked",
  description: "Open the list and confirm the active multiselect option exposes both values for screen reader compatibility."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "ARIA state audit", {
  enableSearchFilter: true,
  text: "ARIA state audit",
  groupBy: "category",
  selectGroup: true,
  badgeShowLimit: 3,
  maxHeight: 180
});
