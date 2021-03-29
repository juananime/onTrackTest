const renderFilterString = (filters: Array<string>): string => {
  let filtersRendered = '';
  filters.map(item => (filtersRendered += ` ${item}`));
  return filtersRendered;
};
export {renderFilterString};
