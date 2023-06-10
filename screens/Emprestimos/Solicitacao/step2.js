import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSession } from "../../../components/services/ApiToken";
import { format, addYears } from "date-fns"

const Step2 = ({ formEmprestimo, setFormEmprestimo, navigation }) => {
    const { user } = useSession(navigation);
    const [cartaoSolicitado, setCartaoSolicitado] = useState("")
    const currentDate = new Date()
    const [prazo, setPrazo] = useState(1)
    const futureDate = addYears(currentDate, prazo)
    const formattedCurrentDate = format(currentDate, "dd-MM-yyyy")
    const formattedFutureDate = format(futureDate, "MM-yyyy")

    if (formEmprestimo.valor > 5000) {
        setPrazo(2)
    }

    if (formEmprestimo.valor > 10000) {
        setPrazo(3)
    }

    if (formEmprestimo.valor > 20000) {
        setPrazo(5)
    }


    return (
        <View className="h-full w-full flex items-center">
            <Text className="w-4/5 pt-1">{formEmprestimo.valor}</Text>
            <Text className="w-4/5 pt-3">Request date: {formattedCurrentDate}</Text>
            <Text className="w-4/5 pt-3">Payment term: {formattedFutureDate}</Text>
        </View>
    );
}

export default Step2;