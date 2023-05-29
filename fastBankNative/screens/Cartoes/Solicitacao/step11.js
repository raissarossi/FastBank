import { useState } from "react";
import { CheckBox, Image, View, Text } from "react-native-web";

const Step1 = () => {
    const [isSelectedDebit, setSelectionDebit] = useState(false);
    const [isSelectedCredit, setSelectionCredit] = useState(false);
    return (
        <View className="h-full w-full flex justify-center items-center">
            {/* <Image source={require('../../../components/img/People/Person03.png')} className='w-80 h-full' /> */}
            <View className="w-4/5 flex flex-row items-center">
                <CheckBox value={isSelectedDebit} onValueChange={setSelectionDebit} className="flex items-center justify-center"
                />
                <Text className="text-lg pl-1">Debit Card</Text>
            </View>
            <View className="w-4/5 flex flex-row mt-10 items-center">
                <CheckBox value={isSelectedCredit} onValueChange={setSelectionCredit} className="flex items-center justify-center"
                />
                <Text className="text-lg pl-1">Credit Card</Text>
            </View>
        </View>
    );
}

export default Step1;