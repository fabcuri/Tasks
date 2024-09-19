
import { StyleSheet, TextInput, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{tasks} from '../task';
import{Tasks} from '../Tasks';

export function TasksScreen() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0077B5" />
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
    
    });