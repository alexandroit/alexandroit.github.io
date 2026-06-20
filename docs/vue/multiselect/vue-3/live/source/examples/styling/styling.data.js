import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "CSS",
  title: "Styling",
  description: "Apply a custom class while keeping the package skin contract intact."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Styling", {
  enableSearchFilter: true,
  text: "Styling"
});
