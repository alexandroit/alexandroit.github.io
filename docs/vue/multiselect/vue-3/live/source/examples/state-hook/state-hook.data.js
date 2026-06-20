import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "State hook",
  title: "useMultiSelectState",
  description: "Use the Stackline selection, filtering, grouping, badge counter, and callbacks while rendering your own controls."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "State hook", {
  enableSearchFilter: true,
  text: "State hook"
});
