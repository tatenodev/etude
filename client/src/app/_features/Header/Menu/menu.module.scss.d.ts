export type Styles = {
  'nav': string;
  'navItem': string;
  'navList': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
