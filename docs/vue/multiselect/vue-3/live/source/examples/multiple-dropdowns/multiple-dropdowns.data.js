import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Multiple",
  title: "Multiple dropdowns",
  description: "Use independent controlled state for each dropdown instance."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Multiple dropdowns", {
  enableSearchFilter: true,
  text: "Multiple dropdowns"
});
