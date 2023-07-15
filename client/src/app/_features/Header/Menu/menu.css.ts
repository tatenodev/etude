import { style } from "@vanilla-extract/css";

export const nav = style({
  borderBottom: "1px solid",
});

export const navList = style({
  display: "flex",
  padding: "16px 60px",
});

export const navItem = style({
  fontSize: "14px",
  selectors: {
    "& + &": {
      marginLeft: "24px",
    },
  },
});
