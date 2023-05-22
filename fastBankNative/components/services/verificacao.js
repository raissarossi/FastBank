import AsyncStorage from '@react-native-async-storage/async-storage';


const Verificacao=(navigation)=>{
        try {
            AsyncStorage.getItem("dados").then((res) => { JSON.parse(res) == undefined ? navigation.navigate('Login') : console.log("ok") })
        }
        catch {
            navigation.navigate('Login')
        }
};

export default Verificacao;
