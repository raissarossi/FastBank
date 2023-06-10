import { Image, View } from "react-native";

const Step0 = () => {
    return ( 
        <View className="h-full w-full flex justify-center items-center">
            <Image source={require('../../../components/img/People/HappyMen.png')} className='w-full h-full' />
        </View>
     );
}
 
export default Step0;