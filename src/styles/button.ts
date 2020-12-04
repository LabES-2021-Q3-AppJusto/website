export default {
  baseStyle: {
    fontFamily: "Barlow",
    fontSize: "16px",
    border: "2px solid black",
    borderRadius: "8px",
    w: "100%",
  },
  variants: {
    basic:{
      fontSize: "15px",
      h: "48px",
      _hover: {bg: "#F2F6EA"}
    },
    secondary: {
      bg: "secondary",
      h: "60px",
      fontSize: "18px",
      _hover: {bg: "#FF7F22"}
    },
    secondaryLight: {
      bg: "secondaryLight",
      h: "48px",
      fontSize: "15px",
      padding: "0 8px",
      _hover: {bg: "#FFC093"}
    },
    secondaryRegistration: {
      bg: "secondaryLight",
      h: "60px",
      fontSize: "18px",
      lineHeight: "26px",
      _hover: {bg: "#FFC093"}
    },
  },
  defaultProps: {
    variants: "basic"
  },
}