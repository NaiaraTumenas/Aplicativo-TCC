import * as React from "react";
//importação dos atributos
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
//importação dos tipos de navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//Importação da biblioteca de ícones
import { Ionicons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import  { Fontisto } from '@expo/vector-icons';

//importação das telas
import Aula from "./scr/tabs/Aula";
import Treino from "./scr/tabs/Treino";
import Perfil from "./scr/tabs/Perfil";
import Home from "./scr/tabs/Home";
import Matricula from "./scr/tabs/Matricula";
import Video from "./scr/tabs/videos";


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Defina suas tabs como stacks para permitir navegações internas
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Matricula" component={Matricula} />
    </Stack.Navigator>
  );
}

function AulaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Aula" component={Aula} />
    </Stack.Navigator>
  );
}

function TreinoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Treino" component={Treino} />
    </Stack.Navigator>
  );
}

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

function VideoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Palestras" component={Video} />
    </Stack.Navigator>
  );
}

// Função para criar as tabs usando as stacks definidas acima
function MyTabs() {
  return (
    <Tab.Navigator>



      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color="#34495e" />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Palestras"
        component={VideoStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="video" color="#34495e" size={26} />
          ),
        }}
      />


      {/* <Tab.Screen
        name="Agendamento"
        component={AulaStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="date" size={24} color="black" />
          ),
          tabBarLabel: "Agendamento",
        }}
      /> */}
      {/* <Tab.Screen
        name="Treino"
        component={TreinoStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="barbell-sharp" size={24} color="#34495e" />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Perfil"
        component={PerfilStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" color="#34495e" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Funções de tela de login e redefinição de senha
function LoginScreen({ navigation }) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: "rgb(17,36,92)", justifyContent: "center" }}>
      <Image style={styles.img} source={require("./assets/Inova_Network.png")} />
      <Text style={styles.text}>FAÇA O SEU LOGIN</Text>
      <TextInput
        style={[styles.input, isFocused && styles.focusedInput]}
        placeholder="Digite seu e-mail:"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TextInput
        secureTextEntry={true}
        style={[styles.input, isFocused && styles.focusedInput]}
        placeholder="Digite sua senha:"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.btnText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
        <Text style={styles.resetSenha}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function ResetScreen({ navigation }) {
  return (
    <View style={styles.resetContainer}>
      <Image style={styles.img} source={require("./assets/Inova_Network.png")} />
      <Text style={styles.instructionText}>Preencha seus Dados</Text>
      <TextInput style={styles.inputField} placeholder="Seu email" />
      <TextInput style={styles.inputField} placeholder="Sua Data Nasc" />
      <TextInput style={styles.inputField} placeholder="Seu Telefone" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Defina a navegação principal usando a stack que contém as tabs
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de login
        />
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela principal
        />
        <Stack.Screen name="Reset" component={ResetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






// estilização dos itens
const styles = StyleSheet.create({
  resetSenha: {
    color: "#48c9b0",
    margin: 10,
  },
  text: {
    fontSize: 35,
    margin: 30,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    textAlign: 'center',
    fontFamily: 'Gabriola',
  },
  img: {
    width: 87,
    height: 100,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: "#48c9b0",
    width: "90%",
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    color: 'white',
  },
  btn: {
    backgroundColor: "#f1a157",
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
  btnText: {
    color: "#fff",
    backgroundColor: "#f1a157",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  focusedInput: {
    borderBottomColor: "#f1c40f",
  },
  resetContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(17,36,92)",
  },
  logoImage: {
    width: 135,
    height: 50,
    marginTop: 40,
  },
  instructionText: {
    fontSize: 25,
    color: "white",
    marginTop: 15,
  },
  inputField: {
    width: "90%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#48C9B0",
    marginTop: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
  resetButton: {
    width: "40%",
    height: 40,
    backgroundColor: "#f1a157",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});