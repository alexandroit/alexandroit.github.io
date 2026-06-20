import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Dialog",
  title: "Using inside dialog",
  description: "Append the panel to document.body so overflow containers do not clip it."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("material", "Using inside dialog", {
  enableSearchFilter: true,
  text: "Using inside dialog",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom",
  maxHeight: 180,
  badgeShowLimit: 2,
  skin: "material"
});
