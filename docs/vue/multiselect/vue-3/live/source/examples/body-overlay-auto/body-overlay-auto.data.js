import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Auto direction",
  title: "Body Overlay Auto",
  description: "Prefer opening upward only when the viewport really needs it."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("material", "Body Overlay Auto", {
  enableSearchFilter: true,
  text: "Body Overlay Auto",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom",
  maxHeight: 180,
  badgeShowLimit: 2,
  skin: "material"
});
