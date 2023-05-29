import { View, Text, Image } from "react-native"
const Cartao = ({ tipo }) => {
    return (
        <View className="w-full justify-center items-center">
            <>
                {tipo == "d" ?
                <Image source={require('../../components/img/CartaoD.png')} className={"w-[300px] h-48 top-1 z-0"} />
                : tipo == "c" ?
                <Image source={require('../../components/img/CartaoC.png')} className={"w-[300px] h-48 top-1 z-0"} />
                : <></>}
            </>

            <View className='absolute z-10 w-[280px] h-40 flex justify-between p-3'>
                <View className='z-20 flex flex-row justify-between'>
                    <Image source={require('../../components/img/logow.png')} className='w-24 h-5' />
                {tipo == "d" ?
                <Text className="text-white pl-1 text-base font-extralight">Debito</Text>
                : tipo == "c" ?
                <Text className="text-white pl-1 text-base font-extralight">Credito</Text>
                : <></>}
                    
                    {/* <Text className="text-white">aaaaaaa</Text> */}
                    {/* <Text className="text-white">aaaaaaa</Text> */}
                </View>
                <View className='z-20'>
                    <Text className="text-white pl-1 text-sm font-thin">Raissa Rossi</Text>
                    <Text className="text-white pl-1 text-sm font-thin">0000.0000.0000.0000-00</Text>
                    <Text className="text-white pl-1 text-sm font-thin">Val. 09/2026</Text>
                </View>
            </View>
        </View>
    );
}

export default Cartao;