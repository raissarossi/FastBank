import { View, Text } from "react-native"
import Navbar from "../../components/Navbar/Navbar";
import Cartao from "./Cartao";

const MeusCartoes = () => {
    return (
        <View>
            <Navbar />
            <View className="">
                <Text className="text-2xl font-semibold mt-14 mb-5 px-10">Meus Cartoes</Text>
            </View>
            <Cartao tipo="d" />
            <Cartao tipo="c" />

        </View>
    );
}

export default MeusCartoes;