import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import logo from "../../assets/logo-resumevideos.png";
import iconPlus from "../../assets/icon-plus.png";
import theme from "../../global/theme";
import { useEffect, useState } from "react";

export function Home() {
  const [_, setVideo] = useState<string>();
  const [newVideo, setNewVideo] = useState<string>("");
  const [message, setMessage] = useState<string>(
    "O resumo pode demorar um pouco, tenha paciência.",
  );

  function handleVideoAdd() {
    // check if link has watch word in link
    if (!newVideo.includes("watch") && !newVideo.includes("shorts")) {
      setMessage(
        "Atenção este link não parecer ser um link do Youtube válido.",
      );
      return Alert.alert(
        "Adicionar Link",
        "Este video NÃO parecer ser um link do Youtube válido",
      );
    }

    // get the video id
    const [_, params] = newVideo.split("/watch");
    const [linkVideoID] = params.split("?si");

    console.log("O Link parece ser válido...", linkVideoID);

    setVideo(newVideo);
    setMessage("Obtendo o texto do vídeo.");
  }

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
            onChangeText={(text) => setNewVideo(text)}
            value={newVideo}
          />

          <TouchableOpacity style={styles.button} onPress={handleVideoAdd}>
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

        <Text style={styles.resultText}>{message} Aguarde...</Text>
      </View>
    </View>
  );
}
