import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSession } from "../../../components/services/ApiToken";
import { format, addYears } from "date-fns"

const Step2 = ({ formCard, setFormCard, navigation }) => {
    const { user } = useSession(navigation);
    const [cartaoSolicitado, setCartaoSolicitado] = useState("")
    const currentDate = new Date()
    const futureDate = addYears(currentDate, 5)
    const formattedCurrentDate = format(currentDate, "dd-MM-yyyy")
    const formattedFutureDate = format(futureDate, "MM-yyyy")
    useEffect(() => {
        if (formCard.cartaoD == true) {
            setCartaoSolicitado("Debit")
        }
        if (formCard.cartaoC == true) {
            setCartaoSolicitado("Credit")
        }
        if (formCard.cartaoD == true && formCard.cartaoC == true) {
            setCartaoSolicitado("Debit and Credit")
        }
        if (formCard.cartaoD == true && formCard.cartaoB == true) {
            setCartaoSolicitado("Debit and Crebit")
        }
        if (formCard.cartaoC == true && formCard.cartaoB == true) {
            setCartaoSolicitado("Credit and Crebit")
        }
        if (formCard.cartaoB == true && formCard.cartaoC == true && formCard.cartaoB == true) {
            setCartaoSolicitado("Debit, Credit and Crebit")
        }
    }, [])

    return (
        <View className="h-full w-full flex items-center">
            <Text className="w-4/5 pt-1">Request {cartaoSolicitado} card</Text>
            <Text className="w-4/5 pt-3">Request date: {formattedCurrentDate}</Text>
            <Text className="w-4/5 pt-3">Val. {formattedFutureDate}</Text>
        </View>
    );
}

export default Step2;