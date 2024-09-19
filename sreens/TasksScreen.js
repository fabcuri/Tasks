
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { tasks } from '../task';
import { Tasks } from '../Tasks';

const today = new Date();
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const diaDaSemana = diasDaSemana[today.getDay()]; // Dia da semana
const dia = today.getDate();
const mes = today.getMonth() + 1;
const dataFormatada = `${diaDaSemana},${dia}/${mes}`;

export function TasksScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0077B5" />
      <View style={styles.textHeader}>
        <View>
          <Text style={styles.textToday}>Today's Task</Text>
          <Text>{dataFormatada}</Text>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>+ New Tasks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContagem}>
        <View style={styles.textContagem2}>
          <Text>All</Text>
          <View style={styles.bola}>
            <Text style={styles.numero}>35</Text>
          </View>
          <Text>|</Text>
        </View>
        <View style={styles.textContagem2}>
          <Text>Open</Text>
          <View style={styles.bola}>
            <Text style={styles.numero}>14</Text>
          </View>
        </View>
        <View style={styles.textContagem2}>
          <Text>Closed</Text>
          <View style={styles.bola}>
            <Text style={styles.numero}>19</Text>
          </View>
        </View>
        <View style={styles.textContagem2}>
          <Text>Archived</Text>
          <View style={styles.bola}>
            <Text style={styles.numero}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <ScrollView>
          <View>
            {
              tasks.map((task) => (

                <Tasks tasks={task}></Tasks>

              )
              )
            }
          </View>
        </ScrollView>
      </View>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  header: {
    padding: 20,
    flex: 1,
    backgroundColor: '#8dbdeb',
    marginTop: 25,
    alignItems: 'center'


  },
  button: {
    width: '30%',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5


  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  textToday: {
    fontWeight: 'bold',
    fontSize: 25
  },
  textContagem: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContagem2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5
  },

  bola: {
    width: 20, // Largura da bola
    height: 20, // Altura da bola
    borderRadius: 25, // Metade da largura/altura para torná-la circular
    backgroundColor: '#007BFF', // Cor da bola
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 10, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },



});