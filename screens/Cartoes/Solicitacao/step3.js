import { Image, View } from "react-native";

const Step3 = () => {
    return ( 
        <View className="h-full w-full flex justify-center items-center">
            <Image source={require('../../../components/img/People/HappyGirls.png')} className='w-full h-full' />
        </View>
     );
}
 
export default Step3;