import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        <View style={styles.headerContainer}>
          <Text style={styles.greetingText}>Olá, usuário!</Text>
          <Text style={styles.planText}>Plano Microempreendedor</Text>
        </View>

        <View>
          {/* Adicione a imagem aqui, se necessário */}
        </View>

        <View style={styles.sessionInfoContainer}>
          <Text style={styles.sessionInfoText}>Agende uma mentoria</Text>
          { <Text style={styles.sessionInfoText2}>conosco</Text> }
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.accessClassButton}
            onPress={() => navigation.navigate('Matricula')}
          >
            <Text style={styles.buttonText}>Agendamento</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.accessTrainingButton}
            onPress={() => navigation.navigate('Treino')}
          >
            <Text style={styles.buttonText}>Acessar treino</Text>
          </TouchableOpacity> */}
        </View>

        <Image
          style={styles.workoutImage}
          source={require('../../assets/Desenho_digital.png')}
          resizeMode="contain"
        />

        {/* <View style={styles.upgradeButtonContainer}>
          <TouchableOpacity
            style={styles.upgradeButton}
            onPress={() => navigation.navigate('Esqueci Senha')}
          >
            <Text style={styles.upgradeButtonText}>Upgrade do Plano</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "rgb(17,36,92)",
  },

  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  greetingText: {
    fontSize: 30,
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#48C9B0',
    fontWeight: 'bold',
    fontFamily: 'Gabriola',
  },
  planText: {
    fontSize: 25,
    color: 'white',
    marginTop: 10,
    fontFamily: 'Gabriola',
  },
  sessionInfoContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 70,
    marginBottom: 40, 
  },
  sessionInfoText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Gabriola',
    textAlign: 'center'
  },

  sessionInfoText2:{
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Gabriola',
    textAlign: 'center',
    marginTop: -25,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  accessClassButton: {
    width: '40%',
    height: 40,
    backgroundColor: "#f1a157",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginRight: 5,
  },
  accessTrainingButton: {
    width: '40%',
    height: 40,
    backgroundColor: '#48C9B0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: "#f1a157",
  },
  workoutImage: {
    width: 300,
    height: 250,
  },
  upgradeButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  upgradeButton: {
    width: '40%',
    height: 40,
    backgroundColor: '#f8da45',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  upgradeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
