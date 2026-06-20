import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Ref methods",
  title: "Methods",
  description: "Call the public ref API for open, close, focus, select all, and clear selection."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Methods", {
  enableSearchFilter: true,
  text: "Methods"
});
