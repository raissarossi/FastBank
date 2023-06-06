import { useEffect, useState } from "react";
import { CheckBox, Image, View, Text } from "react-native";

const Step1 = ({ formCard, setFormCard }) => {
    const [isSelectedDebit, setSelectionDebit] = useState(false);
    const [isSelectedCredit, setSelectionCredit] = useState(false);
    useEffect(()=>{
        setFormCard({...formCard, cartaoD:isSelectedDebit})
    },[isSelectedDebit])

    useEffect(()=>{
        setFormCard({...formCard, cartaoC:isSelectedCredit})
    },[isSelectedCredit])

    return (
        <View className="h-full w-full flex justify-center items-center">
            <View className="w-4/5 flex flex-row items-center">
                <CheckBox value={formCard.cartaoD} onValueChange={setSelectionDebit} className="flex items-center justify-center"
                />
                <Text className="text-lg pl-1">Debit Card</Text>
            </View>
            <View className="w-4/5 flex flex-row mt-10 items-center">
                <CheckBox value={formCard.cartaoC} onValueChange={setSelectionCredit} className="flex items-center justify-center"
                />
                <Text className="text-lg pl-1">Credit Card</Text>
            </View>
        </View>
    );
}

export default Step1;
