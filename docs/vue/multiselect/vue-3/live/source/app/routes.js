import BasicExample from '../examples/basic/basic.component.vue';
import KeyboardContractExample from '../examples/keyboard-contract/keyboard-contract.component.vue';
import AriaStateExample from '../examples/aria-state/aria-state.component.vue';
import HeadlessAriaExample from '../examples/headless-aria/headless-aria.component.vue';
import StateHookExample from '../examples/state-hook/state-hook.component.vue';
import SlotsApiExample from '../examples/slots-api/slots-api.component.vue';
import TypeSafeFactoryExample from '../examples/type-safe-factory/type-safe-factory.component.vue';
import AsyncObjectPreservationExample from '../examples/async-object-preservation/async-object-preservation.component.vue';
import SingleSelectionExample from '../examples/single-selection/single-selection.component.vue';
import SearchFilterExample from '../examples/search-filter/search-filter.component.vue';
import CustomSearchApiExample from '../examples/custom-search-api/custom-search-api.component.vue';
import SearchFilterByPropertyExample from '../examples/search-filter-by-property/search-filter-by-property.component.vue';
import SearchAddNewItemExample from '../examples/search-add-new-item/search-add-new-item.component.vue';
import GroupByExample from '../examples/group-by/group-by.component.vue';
import TemplatingExample from '../examples/templating/templating.component.vue';
import TemplateDrivenFormsExample from '../examples/template-driven-forms/template-driven-forms.component.vue';
import ReactiveFormsExample from '../examples/reactive-forms/reactive-forms.component.vue';
import VirtualScrollingExample from '../examples/virtual-scrolling/virtual-scrolling.component.vue';
import LazyLoadingApiExample from '../examples/lazy-loading-api/lazy-loading-api.component.vue';
import RemoteDataExample from '../examples/remote-data/remote-data.component.vue';
import ListLoopExample from '../examples/list-loop/list-loop.component.vue';
import DialogExample from '../examples/dialog/dialog.component.vue';
import MultipleDropdownsExample from '../examples/multiple-dropdowns/multiple-dropdowns.component.vue';
import DynamicDataExample from '../examples/dynamic-data/dynamic-data.component.vue';
import MethodsExample from '../examples/methods/methods.component.vue';
import EventsExample from '../examples/events/events.component.vue';
import DisabledExample from '../examples/disabled/disabled.component.vue';
import LimitSelectionExample from '../examples/limit-selection/limit-selection.component.vue';
import LimitBadgesExample from '../examples/limit-badges/limit-badges.component.vue';
import CustomPlaceholderExample from '../examples/custom-placeholder/custom-placeholder.component.vue';
import StylingExample from '../examples/styling/styling.component.vue';
import BodyOverlayAutoExample from '../examples/body-overlay-auto/body-overlay-auto.component.vue';
import AllVisibleCounterExample from '../examples/all-visible-counter/all-visible-counter.component.vue';

export const routes = [
  { slug: 'basic', title: "Basic usage", description: "Classic multi-select with chips, clear all, and selected counters.", component: BasicExample },
  { slug: 'keyboard-contract', title: "Keyboard contract", description: "Turn individual keyboard behaviors on or off and compare how Space behaves on focused options.", component: KeyboardContractExample },
  { slug: 'aria-state', title: "ARIA state audit", description: "Open the list and confirm the active multiselect option exposes both values for screen reader compatibility.", component: AriaStateExample },
  { slug: 'headless-aria', title: "Headless + ARIA", description: "Use Stackline state, filtering, grouping, keyboard handling, ARIA ids, and callbacks while owning every element and class.", component: HeadlessAriaExample },
  { slug: 'state-hook', title: "State hook", description: "Use the Stackline selection, filtering, grouping, badge counter, and callbacks while rendering your own controls.", component: StateHookExample },
  { slug: 'slots-api', title: "Slots API", description: "Replace the trigger, badges, search shell, group header, options, and footer while preserving package behavior.", component: SlotsApiExample },
  { slug: 'type-safe-factory', title: "Type-safe factory", description: "Bind the object shape once, then reuse typed settings, typed slots, and the typed composable helpers.", component: TypeSafeFactoryExample },
  { slug: 'async-object-preservation', title: "Async object preservation", description: "Refresh the option source while selected objects stay intact, then add a new item from search.", component: AsyncObjectPreservationExample },
  { slug: 'single-selection', title: "Single selection", description: "Single-value selection with checkbox-free option rows.", component: SingleSelectionExample },
  { slug: 'search-filter', title: "Search filter", description: "Search across country names and capitals while keeping controlled Vue state.", component: SearchFilterExample },
  { slug: 'custom-search-api', title: "Custom search from API", description: "Replace the search control with a Vue input and feed the dropdown with API-filtered data.", component: CustomSearchApiExample },
  { slug: 'search-filter-by-property', title: "Search filter by property", description: "Use settings.searchBy so the filter checks name, capital, and region fields.", component: SearchFilterByPropertyExample },
  { slug: 'search-add-new-item', title: "Search and Add New Item", description: "Create a new item from the current search query and keep it in local Vue state.", component: SearchAddNewItemExample },
  { slug: 'group-by', title: "Group By", description: "Group options by a field and allow group-level selection.", component: GroupByExample },
  { slug: 'templating', title: "Templating", description: "Use Vue render functions for option rows and selected badges.", component: TemplatingExample },
  { slug: 'template-driven-forms', title: "Template-style forms", description: "Vue keeps the form values in refs while the dropdown stays controlled.", component: TemplateDrivenFormsExample },
  { slug: 'reactive-forms', title: "Reactive forms", description: "Derive validity from Vue state and selected dropdown items.", component: ReactiveFormsExample },
  { slug: 'virtual-scrolling', title: "Virtual Scrolling", description: "Constrain a long list with keyboard-friendly scrolling and a fixed dropdown height.", component: VirtualScrollingExample },
  { slug: 'lazy-loading-api', title: "Lazy Loading from API", description: "Append more remote rows when the dropdown scroll reaches the end.", component: LazyLoadingApiExample },
  { slug: 'remote-data', title: "Data from remote API", description: "Swap remote result sets while preserving the controlled selected array.", component: RemoteDataExample },
  { slug: 'list-loop', title: "Using in list for loop", description: "Render multiple dropdowns from an array of configuration objects.", component: ListLoopExample },
  { slug: 'dialog', title: "Using inside dialog", description: "Append the panel to document.body so overflow containers do not clip it.", component: DialogExample },
  { slug: 'multiple-dropdowns', title: "Multiple dropdowns", description: "Use independent controlled state for each dropdown instance.", component: MultipleDropdownsExample },
  { slug: 'dynamic-data', title: "Load dynamic data", description: "Change the option collection after the component is already mounted.", component: DynamicDataExample },
  { slug: 'methods', title: "Methods", description: "Call the public ref API for open, close, focus, select all, and clear selection.", component: MethodsExample },
  { slug: 'events', title: "Events", description: "Record open, close, select, deselect, select-all, and clear-all callbacks.", component: EventsExample },
  { slug: 'disabled', title: "Disabled state", description: "Render a disabled dropdown while preserving the current value.", component: DisabledExample },
  { slug: 'limit-selection', title: "Limit selection", description: "Prevent choosing more than the configured maximum.", component: LimitSelectionExample },
  { slug: 'limit-badges', title: "Limit badges", description: "Show only a fixed number of chips and move the rest into the + counter.", component: LimitBadgesExample },
  { slug: 'custom-placeholder', title: "Custom placeholder", description: "Keep an empty controlled value while showing project-specific placeholder and empty labels.", component: CustomPlaceholderExample },
  { slug: 'styling', title: "Styling", description: "Apply a custom class while keeping the package skin contract intact.", component: StylingExample },
  { slug: 'body-overlay-auto', title: "Body Overlay Auto", description: "Prefer opening upward only when the viewport really needs it.", component: BodyOverlayAutoExample }
];

export const legacyRoutes = [
  { slug: 'all-visible-counter', title: "All visible counter", description: "Selected badges stay visible and the overflow counter disappears when no selected items are hidden.", component: AllVisibleCounterExample }
];

export const allRoutes = [...routes, ...legacyRoutes];
