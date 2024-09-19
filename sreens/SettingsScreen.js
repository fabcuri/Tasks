import{Text , StyleSheet} from 'react-native'

export function SettingsScreen() {
    return (
 <Text style={styles.textHeader}>"Nao há atividades recentes na aplicação”</Text>
    )
  }
  const styles = StyleSheet.create({

   textHeader: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 25
   },
 
 });