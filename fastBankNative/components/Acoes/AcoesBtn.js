import { Touchable } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from 'react-native';
import Btns from "./Btns";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import PIX from "../img/logoPix.png"
import { Feather } from '@expo/vector-icons';


const AcoesBtn = () => {
    const navigation = useNavigation();
    return (

        <View className={"flex flex-row flex-wrap overflow-hidden justify-evenly content-between py-10"}>
            <Btns icon={
                <Ionicons name="card-outline" size={24} color="black" />
            }
                pagina={() => navigation.navigate('MeusCartoes', { title: 'PIX' })}>
                
            </Btns>



            <Btns icon={
                <Ionicons name="ios-barcode-outline" size={24} color="black" />
            }
                pagina={() => navigation.navigate('Transferencias', { title: 'BOLETO' })}>
                
            </Btns>



            <Btns icon={
                <Feather name="refresh-ccw" size={24} color="black" />
            }
                pagina={() => navigation.navigate('Transferencias', { title: 'TRANSFERENCIA' })}>
                
            </Btns>


            
            <Btns icon={
                <Ionicons name="ios-trending-up-outline" size={24} color="black" />
            }
                pagina={() => navigation.navigate('Transferencias', { title: 'PIX' })}>
                
            </Btns>



            <Btns icon={
                <Ionicons name="arrow-back" size={28} color="white" />
            }
                pagina={() => navigation.navigate('Transferencias', { title: 'PIX' })}>
                
            </Btns>


            
            <Btns icon={
                <Ionicons name="arrow-back" size={28} color="white" />
            }
                pagina={() => navigation.navigate('Transferencias', { title: 'PIX' })}>
                
            </Btns>



        </View>

    );
}

export default AcoesBtn;