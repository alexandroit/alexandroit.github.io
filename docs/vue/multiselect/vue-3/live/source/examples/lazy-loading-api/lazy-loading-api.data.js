import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Lazy API",
  title: "Lazy loading from API",
  description: "Append more remote rows when the dropdown scroll reaches the end."
};
export const dataSeed = largeList;
export const selectedSeed = largeList.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Lazy Loading from API", {
  enableSearchFilter: true,
  text: "Lazy Loading from API",
  lazyLoading: true,
  maxHeight: 145,
  badgeShowLimit: 3
});
