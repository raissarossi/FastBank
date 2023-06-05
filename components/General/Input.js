import { TextInput, View } from "react-native";

const Inputt = ({ texto, onChangeText, value, max, keyboardType }) => {
    return (
        <View className="w-full flex justify-center items-center">
            <TextInput placeholder={texto} onChangeText={onChangeText} value={value} maxLength={max} keyboardType={keyboardType}
            className='w-4/5 h-12 rounded-xl border-2 border-light-grey z-20 pl-2 placeholder:text-dark-grey1 placeholder:font-semibold placeholder:italic placeholder:text-lg ' />
        </View>
    );
}

export default Inputt;