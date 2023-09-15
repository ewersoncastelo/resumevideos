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
import { useState } from "react";
import api from "../../services/api";

export function Home() {
  const [_, setVideo] = useState<string>();
  const [newVideo, setNewVideo] = useState<string>("");
  const [message, setMessage] = useState<string>(
    "Após enviar o link, o resumo pode demorar um pouco, tenha paciência.",
  );

  async function handleVideoAdd() {
    // check if link has watch word in link
    if (!newVideo.includes("watch") && !newVideo.includes("shorts")) {
      return Alert.alert(
        "Adicionar Link",
        "Este video NÃO parecer ser um link do Youtube válido",
      );
    }

    // get the video id
    const [_, params] = newVideo.split("/watch");
    const [link, linkVideoID] = params.split("?v=");

    console.log("Conferindo params:" + params);
    console.log("Conferindo linkID:" + linkVideoID);

    setVideo(newVideo);
    setMessage("Baixando o áudio do vídeo...");

    const transcription = await api.get("/summary/" + linkVideoID);

    setMessage(
      `Aguarde alguns segundos estamos resumindo este texto.. \n ${transcription.data.result}`,
    );

    setTimeout(async () => {
      setMessage("Realizando o resumo. Aguarde...");

      const summary = await api.post("/summary", {
        text: transcription.data.result,
      });

      setMessage(summary.data.result);
      setNewVideo("");
    }, 10000);
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

        <TextInput style={styles.resultText} multiline editable={false}>
          {message}
        </TextInput>
      </View>
    </View>
  );
}
