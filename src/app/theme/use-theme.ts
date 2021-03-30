import {ThemeContext} from 'styled-components/native';
import {useContext} from 'react';
const useTheme = () => {
  return useContext(ThemeContext);
};
export {useTheme};
