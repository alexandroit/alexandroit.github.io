import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Type-safe factory",
  title: "createVueMultiselectDropdown()",
  description: "Bind the object shape once, then reuse typed settings, typed slots, and the typed composable helpers."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Typed helper API", {
  enableSearchFilter: true,
  text: "Typed helper API"
});
