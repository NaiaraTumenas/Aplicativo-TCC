// Matricula.js
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, Picker, TouchableOpacity, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePicker from '@react-native-community/datetimepicker';

const classSchedules = {
  Evelyn: ["08:00", "10:00", "16:00"],
  Naiara: ["07:00", "09:00", "18:00"],
  Leonardo: ["06:00", "12:00", "17:00"],

};

export default function Matricula({ navigation }) {
  const [selectedClass, setSelectedClass] = useState("Evelyn");
  const [selectedTime, setSelectedTime] = useState(classSchedules["Evelyn"][0]);
  const [selectedDate, setSelectedDate] = useState('2023-03-16');
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (day) => {
    setSelectedDate(day.dateString);
  };

  const onClassChange = (itemValue) => {
    setSelectedClass(itemValue);
    setSelectedTime(classSchedules[itemValue][0]);
  };

  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTimePicker(false);
    setSelectedTime(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Text style={styles.title}>AGENDAMENTO</Text>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Profissional:</Text>
        <Picker
          selectedValue={selectedClass}
          style={styles.picker}
          onValueChange={onClassChange}
        >
          <Picker.Item label="Carlos" value="Carlos" />
          <Picker.Item label="Evelyn" value="Evelyn" />
          <Picker.Item label="Higor" value="Higor" />
          <Picker.Item label="Naiara" value="Naiara" />
          <Picker.Item label="Leonardo" value="Leonardo" />
        </Picker>
      </View>
      
      <View style={styles.timeContainer}>
        <Text style={styles.label}>Horário:</Text>
        <Picker
          selectedValue={selectedTime}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
        >
          {classSchedules[selectedClass].map((time) => (
            <Picker.Item key={time} label={time} value={time} />
          ))}
        </Picker>
      </View>
      
      <Calendar
        style={styles.calendar}
        current={selectedDate}
        onDayPress={onDateChange}
        markedDates={{
          [selectedDate]: {selected: true, marked: true, selectedColor: 'rgb(17,36,92)'}
        }}
      />
      
      <TouchableOpacity style={styles.confirmButton} onPress={() => alert(`Agendamento com ${selectedClass} realizado no dia ${selectedDate} às ${selectedTime}!`)}>
        <Text style={styles.confirmButtonText}>CONFIRMAR</Text>
      </TouchableOpacity>
      
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(17,36,92)',
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    color: 'white',
  },
  picker: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  calendar: {
    marginVertical: 20,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: '#f1a157',
    width: '60%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 85,
    borderRadius: 5,
    marginVertical: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
   
  },
});