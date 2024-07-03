import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Ícone para a foto de perfil */}
        <View style={styles.profileIconContainer}>
          <Ionicons name="person-circle-outline" size={150} color="white" />
          <TouchableOpacity style={styles.editIconContainer}>
            <Ionicons name="create-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Inputs para editar */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
        </View>

        {/* Botão de salvar */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(17,36,92)", // Fundo branco
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileIconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: -10,
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1c40f", // Cor da borda inferior dos inputs
    color: "white", // Cor do texto dos inputs
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "#f1a157",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: '60%'
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
