import { SafeAreaView, StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },

  content: {
    alignItems: "center",
    marginTop: 50,

    marginHorizontal: 20,
  },

  logoImage: {
    width: 64,
    height: 60.54,
  },

  title: {
    color: theme.colors["primary-light"],
    fontSize: 34,
    fontFamily: theme.fonts.heading,

    marginTop: 10,
  },

  form: {
    flexDirection: "row",
    marginTop: 20,
  },

  input: {
    height: 48,
    flex: 1,
    color: theme.colors["text-primary"],
    backgroundColor: theme.colors["input-surface"],
    padding: 12,

    borderRadius: 5,
    marginRight: 12,
  },

  button: {
    height: 48,
    width: 48,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors["primary-mid"],
    borderRadius: 5,
  },

  textButton: {
    width: 24,
    height: 24,
  },

  subHeader: {
    marginHorizontal: 20,
    flex: 1,
    marginBottom: 15,
  },

  titleResume: {
    color: theme.colors["text-primary"],
    fontSize: 22,

    fontFamily: theme.fonts.heading,
    marginTop: 20,
  },

  resultText: {
    color: theme.colors["text-secondary"],
    fontSize: 16,

    marginTop: 18,
    textAlign: "justify",
  },
});
