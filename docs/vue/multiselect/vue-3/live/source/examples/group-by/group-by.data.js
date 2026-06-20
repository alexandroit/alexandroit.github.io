import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Grouping",
  title: "Group By",
  description: "Group options by a field and allow group-level selection."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Group By", {
  enableSearchFilter: true,
  text: "Group By",
  groupBy: "region",
  selectGroup: true,
  badgeShowLimit: 3
});
