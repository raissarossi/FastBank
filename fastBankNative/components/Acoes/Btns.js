import { TouchableOpacityBase, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';

const Btns = ({ pagina, icon }) => {
    return (
        <TouchableOpacity onPress={pagina} className={' w-5/12 h-20 rounded-2xl flex justify-center items-start my-5 overflow-hidden border-2 bg-pink-800'} >
            <View className="bg-white w-4/12 h-full flex items-center justify-center ">

                {icon}
            </View>
        </TouchableOpacity>
    );
}

export default Btns;