import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Slots API",
  title: "Custom HTML slots",
  description: "Replace the trigger, badges, search shell, group header, options, and footer while preserving package behavior."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Slots API", {
  enableSearchFilter: true,
  text: "Slots API"
});
