import { Text, View, StyleSheet} from 'react-native';


export function Tasks({ tasks }) {

    return (

<View style={styles.post}>
<Text>Id:
  {tasks.id}</Text>
<Text>Nome:
  {tasks.nome}</Text>
<Text>Descricao:
  {tasks.descricao}</Text>
<Text>Status:
  {tasks.status}</Text>
<Text>Data:
  {tasks.data}</Text>
</View>
   )
}
const styles = StyleSheet.create({

    post: {
      padding: 10,
      width: '100%',
      backgroundColor: '#FFF',
      borderRadius: 15,
      marginBottom:5
    }
});
