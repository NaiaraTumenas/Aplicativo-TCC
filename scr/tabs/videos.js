import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Aula = ({ image, title, description }) => (
  <View style={styles.aulaContainer}>

    <Image source={image} style={styles.image} />

    <View style={styles.overlay}>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} >

        <Text style={styles.buttonText}>COMEÇAR</Text>

      </TouchableOpacity>

    </View>
  </View>
);

export default function Video() {
  const aulas = [
    {
      image: require('../../assets/gifStartup2.webp'),
      title: 'Mentoria de Empreendedores',
  
    },

    {
      image: require('../../assets/Gifstartup.gif'),
      title: 'Como Administrar uma Startup',
      
    },
    

    {
      image: require('../../assets/Gifstartup3.gif'),
      title: 'Captação e Gestão de recursos nas startups',
      
    },

    {
      image: require('../../assets/GIFstartup4.gif'),
      title: 'O Poder da Inovação: Transformando Ideias em Startups',
      
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
               <Text style={styles.pageTitle}>PALESTRAS</Text>
        {aulas.map((aula, index) => (
          <Aula key={index} image={aula.image} title={aula.title} description={aula.description} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backIcon: {
    margin: 16
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  aulaContainer: {
    marginBottom: 20,
    position: 'relative',
    marginHorizontal: 16
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4ACFAC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
