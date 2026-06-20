import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Render functions",
  title: "Templating",
  description: "Use Vue render functions for option rows and selected badges."
};
export const dataSeed = metricItems;
export const selectedSeed = metricItems.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Templating", {
  enableSearchFilter: true,
  text: "Templating",
  badgeShowLimit: 3
});
