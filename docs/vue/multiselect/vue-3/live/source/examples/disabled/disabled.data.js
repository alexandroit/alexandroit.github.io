import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "State",
  title: "Disabled state",
  description: "Render a disabled dropdown while preserving the current value."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Disabled state", {
  enableSearchFilter: true,
  text: "Disabled state",
  disabled: true,
  badgeShowLimit: 3
});
