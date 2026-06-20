import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Counter",
  title: "All visible counter",
  description: "Selected badges stay visible and the overflow counter disappears when no selected items are hidden."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 6);
export const settingsSeed = makeSettings("classic", "All visible counter", {
  enableSearchFilter: false,
  text: "All visible counter",
  badgeShowLimit: 12
});
