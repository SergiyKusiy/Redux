export const optionsListSelector = state => state.options.optionsList;

export const selectedIdsSelector = state => state.options.selected;

export const selectedOptionsSelector = state => {
  const allOptionsList = optionsListSelector(state);
  const selectedIds = selectedIdsSelector(state);
  return allOptionsList.filter(option => selectedIds.includes(option.id));
};

export const availableOptionsSelector = state => {
  const allOptionsList = optionsListSelector(state);
  const selectedIds = selectedIdsSelector(state);
  return allOptionsList.filter(option => !selectedIds.includes(option.id));
};