import react from 'react';
import { View , Text, Button } from 'react-native';
import axios from 'axios';

function App(){
 async function fetchData(){
   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //than catch usage:
    //then(response => console.log(response))  
    //.catch(error => console.log(error))
    console.log(response)

  }
  return(
    <View>
      <Text>Hello Api</Text>
      <Button title='fetch Data' onPress={fetchData}/>
    </View>
  )
}

export default App;