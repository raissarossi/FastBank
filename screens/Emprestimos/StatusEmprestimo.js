import { Image, View } from "react-native";
import { useSession } from "../../components/services/ApiToken";

const StatusEmprestimo = ({ formEmprestimo, setFormEmprestimo, navigation }) => {
    const { user } = useSession(navigation);


    if (formEmprestimo.aprovado === 1) {
        return (
            <View>
                <Text></Text>
                <View className="h-full w-full flex justify-center items-center">
                    <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-full' />
                </View>
            </View>
        )
    }
    else if (formEmprestimo.aprovado === 2) {
        return (
            <View className="h-full w-full flex justify-center items-center">
                <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-full' />
            </View>
        )
    }

}

export default StatusEmprestimo;