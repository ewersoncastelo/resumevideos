import { SafeAreaView, StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoImage: {
    width: 64,
    height: 60.54,

    marginBottom: 10,
  },

  title: {
    color: theme.colors["primary-light"],
    fontSize: 34,
    fontFamily: theme.fonts.heading,
  },
});
