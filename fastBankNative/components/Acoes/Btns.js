import { TouchableOpacityBase, View } from "react-native";
import { Pressable, TouchableOpacity } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';

const Btns = ({ pagina, icon }) => {
    return (
        <Pressable onPress={pagina} className={' w-5/12 h-20 rounded-2xl flex justify-center items-start my-5 overflow-hidden border-2 bg-black'} >
            <View className="bg-white w-4/12 h-full flex items-center justify-center ">
                {icon}
            </View>
        </Pressable>
    );
}

export default Btns;