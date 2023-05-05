import { Button, Image } from "react-native";
import { TextInput, TouchableOpacity, View } from "react-native-web";
import SimpleSelectButton from 'react-native-simple-select-button';
import { Ionicons } from '@expo/vector-icons';


const Login = () => {
    return (
        <View className='bg-red-600 flex flex-col justify-evenly items-center h-full '>
            <Image source={require('../../components/img/logob.png')} className={'w-4/5 h-20'} />

            <TextInput className='bg-green-400 w-4/5 h-16 rounded-xl border-2 border-light-grey '></TextInput>
            <TextInput className='bg-green-400 w-4/5 h-16 rounded-xl border-2 border-light-grey '></TextInput>
            <TextInput className='bg-green-400 w-4/5 h-16 rounded-xl border-2 border-light-grey '></TextInput>

            <SimpleSelectButton
                text="Button 1"
                textSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={true}
                onPress={() => { }}
            />

            <View className='bg-yellow-400 w-full h-12 flex items-center justify-center'>
                <TouchableOpacity className='bg-black text-white w-5/12 h-full rounded-full flex items-center justify-center'>SAVE</TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;