import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: theme.fonts.regular,
  },
});
