
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { tasks } from '../task';
import { Tasks } from '../Tasks';

const today = new Date();
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const diaDaSemana = diasDaSemana[today.getDay()]; // Dia da semana
const dia = today.getDate();
const mes = today.getMonth() + 1;
const dataFormatada = `${diaDaSemana},${dia}/${mes}`;



export function TasksScreen() {

  const [inputValue, setInputValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  const [tasks, setTasks] = useState([])
  const [original, setOriginal] = useState([
    {
      id: 1,
      nome: "Estudar",
      descricao: "Estudar para DevInHouse",
      status: "false",
      data: "18 set 2024"
    },
    {
      id: 2,
      nome: "Pagar boleto",
      descricao: "Pagar boleto do condominio de minas",
      status: "false",
      data: "17 set 2024"
    },
    {
      id: 3,
      nome: "Estudar 2",
      descricao: "Estudar para Faculdade",
      status: "false",
      data: "18 set 2024"
    },
  ])

  const [search, setSearch] = useState("")

  useEffect(() => {
    /**
     * "Estudar".includes("") => true
     * "Pagar boleto".includes("") => true
     * "Estudar 2".includes("") => true
     */
    console.log('usuario digitando no input de busca')
    const filtrado = original.filter(item =>
      item.nome.toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()))


    setTasks(filtrado)
  }, [search, original])

  function novaTarefa() {
    const newTask = {
      id: tasks.length + 1,
      nome: inputValue,
      descricao: "Exemplo de tarefa criada",
      status: "false",
      data: "19 set 2024"
    }

    // setOriginal(valorAtual => [...valorAtual, newTask])
    setOriginal(prev => [...prev, newTask])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0077B5" />
      <View style={styles.textHeader}>
        <View>
          <Text style={styles.textToday}>Today's Task</Text>
          <Text>{dataFormatada}</Text>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => setModalVisible(true)}>+ New Tasks</Text>
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
      <TextInput style={styles.searchInput} placeholder='Buscar tarefa' onChangeText={setSearch} value={search} />
        <ScrollView>
          <View>
            {tasks.length === 0 ?
              <Text>Nao existem tarefas cadastradas</Text> : <></>}
            {
              tasks.map((task) => (

                <Tasks tasks={task}></Tasks>

              )
              )
            }
          </View>
        </ScrollView>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Nova Tarefa</Text>
              <TextInput style={styles.textInput}
                placeholder='Digite o nome da tarefa'
                value={inputValue} onChangeText={setInputValue} />
              <Button title='Cancelar' onPress={() => setModalVisible(false)} />
              <Button title='Salvar' onPress={novaTarefa} />
            </View>
          </View>
        </Modal>
      </View>



    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  header: {
    padding: 10,
    flex: 1,
    backgroundColor: '#8dbdeb',
    marginTop:3,
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
    marginTop: 15,
    marginBottom: 15
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap:6
  },
  searchInput: {
    width: 200,
    height: 32,
    borderWidth: 1,
    borderColor: 'black',
    textAlign:'center',
    marginBottom:7,
  },
  textInput:{
   fontSize: 25,
  
  }



});