import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Badge counter",
  title: "Limit badges",
  description: "Show only a fixed number of chips and move the rest into the + counter."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 8);
export const settingsSeed = makeSettings("classic", "Limit badges", {
  enableSearchFilter: true,
  text: "Limit badges",
  badgeShowLimit: 2
});
