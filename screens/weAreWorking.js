import { View, Image, Text } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const weAreWorking = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };
    return (
        <View className="w-full h-full">
            <Navbar />
            <Text className="text-2xl font-semibold mt-14 mb-5 px-10">Sorry, this function is not enable at the moment</Text>
            <View className="w-full h-96 flex justify-center items-center">
                <Image source={require('../components/img/People/TeamWork.png')} className='w-full h-full' />
            </View>
            <View className="w-full flex justify-center items-center">
            <TouchableOpacity onPress={handlePress} className={'bg-black w-4/5 h-12 rounded-full flex justify-center items-center'}>
                <Text className="text-white">BACK</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

export default weAreWorking;