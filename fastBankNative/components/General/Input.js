import { TextInput, View } from "react-native-web";

const Inputt = ({ texto, onChangeText, value, max }) => {
    return (
        <View className="w-full flex justify-center items-center">
            <TextInput placeholder={texto} onChangeText={onChangeText} value={value} maxLength={max}
            className='w-4/5 h-12 rounded-xl border-2 border-light-grey z-20 pl-2 placeholder:text-dark-grey1 placeholder:font-semibold placeholder:italic placeholder:text-lg ' />
        </View>
    );
}

export default Inputt;