import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Remote API",
  title: "Data from remote API",
  description: "Swap remote result sets while preserving the controlled selected array."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Data from remote API", {
  enableSearchFilter: true,
  text: "Data from remote API",
  badgeShowLimit: 3
});
