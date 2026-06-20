import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Dynamic",
  title: "Load dynamic data",
  description: "Change the option collection after the component is already mounted."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Load dynamic data", {
  enableSearchFilter: true,
  text: "Load dynamic data",
  badgeShowLimit: 3
});
