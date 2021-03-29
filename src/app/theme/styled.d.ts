import 'styled-components';
export type Colours = {
  brandBlue: string;
  lightBackground: string;
  textInputBackground: string;
  bookTitle: string;
};
export type Paddings = {
  mainPadding: number;
  cardBookPadding: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: Colours;
    paddings: Paddings;
  }
}
