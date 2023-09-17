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
import api from "../../services/api";

export function Home() {
  const [_, setVideo] = useState<string>();
  const [newVideo, setNewVideo] = useState<string>("");
  const [message, setMessage] = useState<string>(
    "Após o envio do link, a extração do texto pode demorar um pouco, tenha paciência.",
  );
  const [title, setTitle] = useState<string>("Enviar o link");
  const [buttonResumeVisible, setbuttonResumeVisible] = useState(false);

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
    setMessage("Obtendo o texto do video..");
    setTitle("Link enviado");

    const transcription = await api.get("/summary/" + linkVideoID);

    setMessage(transcription.data.result);
    setbuttonResumeVisible(true);
    setTitle("Deseja resumir o texto?");

    // try {
    //   setbuttonResumeVisible(true);
    //   setTitle("Deseja resumir o texto?");

    //   setMessage("Realizando o resumo. Aguarde...");
    //   const summary = await api.post("/summary", {
    //     text: transcription.data.result,
    //   });

    //   setMessage(transcription.data.result);
    //   setNewVideo("");
    // } catch (error) {
    //   Alert.alert(
    //     "Servidor Ocupado",
    //     "Desculpe-nos pelo inconveniente estamos sobrecarregados tente mais tarde.",
    //   );
    // }
  }

  async function handleResumeText() {
    try {
      setbuttonResumeVisible(false);
      setTitle("Estamos resumindo o texto, seja paciente!");

      // console.log("Isso é o que tem dentro de: ", message);

      // setMessage("Realizando o resumo. Aguarde...");
      const summary = await api.post("/summary", {
        text: message,
      });

      // console.log("Isso é o que tem dentro de: ", summary);

      setMessage(summary.data.result);
      setTitle("Resumo finalizado");
      setNewVideo("");
      setbuttonResumeVisible(false);
    } catch (error) {
      Alert.alert(
        "Servidor Ocupado",
        "Desculpe-nos pelo inconveniente estamos sobrecarregados tente mais tarde.",
      );
    }
  }

  useEffect(() => {
    setbuttonResumeVisible(false);
  }, []);

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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 15,
          }}>
          <Text style={styles.titleResume}>{title}</Text>

          {buttonResumeVisible && (
            <TouchableOpacity
              style={styles.buttonResume}
              onPress={handleResumeText}>
              <Image
                source={iconPlus}
                style={styles.textButtonResume}
                tintColor={theme.colors["text-primary"]}
              />
            </TouchableOpacity>
          )}
        </View>

        <TextInput style={styles.resultText} multiline editable={false}>
          {message}
        </TextInput>
      </View>
    </View>
  );
}
