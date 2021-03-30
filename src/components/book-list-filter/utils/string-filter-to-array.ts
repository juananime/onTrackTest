const stringFilterToArray = (filters: string) => {
  return filters.split(' ').filter(item => item !== '');
};
export {stringFilterToArray};
