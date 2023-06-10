import { Image, View } from "react-native";
import { useSession } from "../../components/services/ApiToken";

const StatusEmprestimo = ({ aprovado, navigation }) => {
    const { user } = useSession(navigation)
    

    if (aprovado === false) {
        return (
            <View>
                <Text></Text>
                <View className="h-full w-full flex justify-center items-center">
                    <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-full' />
                </View>
            </View>
        )
    }
    else if (aprovado === true) {
        return (
            <View className="h-full w-full flex justify-center items-center">
                <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-full' />
            </View>
        )
    }


}

export default StatusEmprestimo;