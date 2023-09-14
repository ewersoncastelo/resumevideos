import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import logo from "../../assets/logo-resumevideos.png";
import iconPlus from "../../assets/icon-plus.png";
import theme from "../../global/theme";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.title}>Resume Videos</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="URL do Vídeo"
            placeholderTextColor={theme.colors["text-secondary"]}
            keyboardType="url"
          />

          <TouchableOpacity style={styles.button} onPress={(e) => {}}>
            <Image
              source={iconPlus}
              style={styles.textButton}
              tintColor={theme.colors["text-primary"]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.titleResume}>Resumo</Text>

        <Text style={styles.resultText}>
          O resumo está sendo gerado. Aguarde...
        </Text>
      </View>
    </View>
  );
}
