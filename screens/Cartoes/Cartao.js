import { View, Text, Image } from "react-native"
import { format, addYears } from "date-fns"

const Cartao = ({ tipo, num, key, nome }) => {
    const currentDate = new Date()
    const futureDate = addYears(currentDate, 5)
    const formattedCurrentDate = format(currentDate, "dd-MM-yyyy")
    const formattedFutureDate = format(futureDate, "MM/yyyy")
    return (
        <View className="w-full justify-center items-center">
            <>
                {tipo == "d" || tipo == "Debit Card" ?
                <Image source={require('../../components/img/CartaoD.png')} className={"w-[300px] h-48 top-1 z-0"} />
                : tipo == "c" || tipo == "Credit Card" ?
                <Image source={require('../../components/img/CartaoC.png')} className={"w-[300px] h-48 top-1 z-0"} />
                : tipo == "b" || tipo == "Crebit Card" ?
                <Image source={require('../../components/img/CartaoB.png')} className={"w-[300px] h-48 top-1 z-0"} />
                :
                <></>}
            </>

            <View className='absolute z-10 w-[280px] h-40 flex justify-between p-3'>
                <View className='z-20 flex flex-row justify-between'>
                    <Image source={require('../../components/img/logow.png')} className='w-24 h-5' />
                {tipo == "d" || tipo == "Debit Card" ?
                <Text className="text-white pl-1 text-base font-extralight">Debito</Text>
                : tipo == "c" || tipo == "Credit Card" ?
                <Text className="text-white pl-1 text-base font-extralight">Credito</Text>
                : tipo == "b" || tipo == "Crebit Card" ?
                <Text className="text-white pl-1 text-base font-extralight">Crebito</Text>
                : <></>}
                </View>
                <View className='z-20'>
                    <Text className="text-white pl-1 text-sm font-thin">{nome}</Text>
                    <Text className="text-white pl-1 text-sm font-thin">{num}</Text>
                    <Text className="text-white pl-1 text-sm font-thin">{formattedFutureDate}</Text>
                </View>
            </View>
        </View>
    );
}

export default Cartao;