import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Forms",
  title: "Template-style form",
  description: "Vue keeps the form values in refs while the dropdown stays controlled."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Template-style forms", {
  enableSearchFilter: true,
  text: "Template-style forms",
  badgeShowLimit: 3
});
