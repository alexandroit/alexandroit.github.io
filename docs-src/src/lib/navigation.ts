import { navigation, type NavigationItem } from "../data/navigation";

export const flattenNavigation = (
  items: NavigationItem[],
): Array<NavigationItem & { section: string }> => {
  const entries: Array<NavigationItem & { section: string }> = [];

  items.forEach((section) => {
    const walk = (item: NavigationItem): void => {
      if (item.path) {
        entries.push({
          ...item,
          section: section.title,
        });
      }

      item.children?.forEach(walk);
    };

    walk(section);
  });

  return entries;
};

export const flatNavigation = flattenNavigation(navigation);

export const findBreadcrumbTrail = (
  path: string,
  items: NavigationItem[] = navigation,
  trail: NavigationItem[] = [],
): NavigationItem[] | undefined => {
  for (const item of items) {
    const nextTrail = [...trail, item];

    if (item.path === path) {
      return nextTrail;
    }

    if (item.children) {
      const nested = findBreadcrumbTrail(path, item.children, nextTrail);

      if (nested) {
        return nested;
      }
    }
  }

  return undefined;
};

