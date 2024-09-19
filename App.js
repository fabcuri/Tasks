import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {TasksScreen} from '././sreens/TasksScreen';
import {MessagemScreen} from '././sreens/MessagemScreen';
import {SettingsScreen} from '././sreens/SettingsScreen';




const Tab = createMaterialTopTabNavigator()



export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        {/* Definicao das tabs */}
        <Tab.Navigator
          initialRouteName='Tasks'
          screenOptions={{ tabBarIndicatorStyle: { backgroundColor: "red" } }}>
          <Tab.Screen  name='Message' component={MessagemScreen}/>
          <Tab.Screen name='Tasks' component={TasksScreen} />
          <Tab.Screen name='Last Activity' component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20,
  },
 
});
