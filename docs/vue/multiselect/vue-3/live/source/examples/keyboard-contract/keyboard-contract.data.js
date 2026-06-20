import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Keyboard contract",
  title: "Keyboard feature switches",
  description: "Turn individual keyboard behaviors on or off and compare how Space behaves on focused options."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Keyboard contract", {
  enableSearchFilter: true,
  text: "Keyboard contract"
});
