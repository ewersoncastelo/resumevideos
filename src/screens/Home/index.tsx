import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import logo from "../../assets/logo-resumevideos.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.title}>Resume Videos</Text>
      </View>
    </View>
  );
}
