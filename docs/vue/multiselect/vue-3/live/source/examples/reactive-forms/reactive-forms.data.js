import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Forms",
  title: "Reactive form validation",
  description: "Derive validity from Vue state and selected dropdown items."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Reactive forms", {
  enableSearchFilter: true,
  text: "Reactive forms",
  badgeShowLimit: 3
});
