export function makeSettings(skin = 'classic', text = 'Select options', options = {}) {
  return {
    singleSelection: false,
    text,
    selectAllText: 'Select all',
    unSelectAllText: 'Deselect all',
    enableCheckAll: true,
    enableSearchFilter: true,
    searchPlaceholderText: 'Search',
    badgeShowLimit: 2,
    maxHeight: 220,
    showCheckbox: true,
    noDataLabel: 'No data',
    clearAll: true,
    primaryKey: 'id',
    labelKey: 'itemName',
    skin,
    ...options
  };
}

export function countryOptionClass(code) {
  return code ? 'country-flag fi fi-' + String(code).toLowerCase() : 'country-flag';
}

export function itemLabel(item) {
  if (Array.isArray(item)) {
    return item.length + ' items';
  }
  if (item && typeof item === 'object' && item.itemName) {
    return item.itemName;
  }
  return String(item ?? '');
}

export function eventLabel(type, payload) {
  return type + ': ' + itemLabel(payload);
}
