import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../screens/Quiz';
import Result from '../screens/result';
import Home from '../screens/Home';
import { StyleSheet } from 'react-native';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator style={styles.navigation}>
      <Stack.Screen name="Home" component={Home}  style={styles.navigationtext}/>
      <Stack.Screen name="Quiz" component={Quiz}style={styles.navigationtext} />
      <Stack.Screen name="Result" component={Result}style={styles.navigationtext} />
      
    </Stack.Navigator>
  );
}
export default MyStack;
const styles = StyleSheet.create({
  navigation: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  navigationtext: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
  }
});
