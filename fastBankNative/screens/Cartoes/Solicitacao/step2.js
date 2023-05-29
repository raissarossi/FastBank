import { useState } from "react";
import { Text, View } from "react-native-web";

const Step2 = ({ formCard, setFormCard }) => {
    const [cartaoSolicitado, setCartaoSolicitado] = useState("")
    if (formCard.cartaoD==true){
        setCartaoSolicitado("Debit")
    }
    else if (formCard.cartaoC==true){
        setCartaoSolicitado("Credit")
    }
    else if (formCard.cartaoD==true && formCard.cartaoC==true){
        setCartaoSolicitado("Debit and Credit")
    }
    return ( 
        <View className="bg-blue-600 h-full w-full">
            <Text>Request {cartaoSolicitado} card</Text>
        </View>
     );
}
 
export default Step2;