// import { Text, View, Pressable } from 'react-native';
// import Inputt from "../../components/General/Input";
// import VoltarBtn from "../../components/General/VoltarBtn";
// import { useEffect, useState } from 'react';
// import ValorBtn from '../../components/Acoes/ValorBtn';
// import { TextInput } from 'react-native-web';
// import Saldo from '../../components/Acoes/Saldo';
// import { useSession } from '../../components/services/ApiToken';

// const TelaValor = ({navigation}) => {
//     const {user} = useSession(navigation)
//     const [valor, setValor] = useState('')
//     const Saldo = 10
//     useEffect(() => {
//         console.log(valor);
//         // if (valor.length > 0) {
//         //     const formattedValor = valor.replace(/[^0-9]/g, "")
//         //     const formattedValor2 = parseFloat(formattedValor)
//         //     const formattedValor3 = (formattedValor2 * (0.01))
//         //     setValor(formattedValor3);
//         // }
//         // else if (valor.length == 0) {
//         //     setValor('')
//         // }
//     }, [valor])
//     return (
//         <View className='h-full'>
//             <View className="flex flex-row bg-black items-center justify-between pt-10 pb-6">
//                 <View className='w-8 px-5 py-2 '>
//                     <VoltarBtn />
//                 </View>
//                 <Text className="text-white text-lg">tipo</Text>
//                 <View className='w-8 px-5 py-2 '></View>
//             </View>
//             <Text className="text-2xl font-semibold mt-14 mb-5 px-10">How Much?</Text>
//             <Inputt texto="$0,00" onChangeText={text => setValor(text)} value={valor} keyboardType="numeric"/>
//             <View className="flex justify-center items-center w-full py-5">
//                 <View className="flex flex-row w-4/5 justify-between">
//                     <ValorBtn valor={1} onPress={() => setValor(valor + 1)} />
//                     <ValorBtn valor={10} onPress={() => setValor(valor + 10)} />
//                     <ValorBtn valor={50} onPress={() => setValor(valor + 50)} />
//                     <ValorBtn valor={100} onPress={() => setValor(valor + 100)} />
//                 </View>
//             </View>
//             <Text className="text-2xl font-semibold mt-8 px-10">Description</Text>
//             <View className="w-full flex justify-center items-center">
//                 <TextInput placeholder="Description" keyboardType="numeric"
//                 className='w-4/5 h-12 border-b-2 pl-2 placeholder:text-dark-grey1 placeholder:font-semibold placeholder:italic placeholder:text-xl '></TextInput>
//             </View>
//             <View className="w-full flex justify-center items-center pt-3">
//                 <View className="w-4/5 flex items-end -mr-5">
//                     <Saldo corText={"text-black"} tema={"white"} />
//                 </View>
//             </View>
//             <View className="w-full flex items-center absolute bottom-16">
//                 <Pressable onPress={() => navigation.navigate('Transferencias')} className="bg-black w-4/5 h-10 flex items-center justify-center rounded-full">
//                     <Text className="text-white">Next</Text>
//                 </Pressable>
//             </View>
//         </View>
//     );
// }

// export default TelaValor;







// import React, { useEffect, useState } from 'react';
// import { Text, View, Pressable } from 'react-native';
// import VoltarBtn from '../../components/General/VoltarBtn';
// import Inputt from '../../components/General/Input';
// import { useSession } from '../../components/services/ApiToken';

// export default function TelaTransf({ navigation, route }) {
//     const { user } = useSession(navigation);
//     const [key, setKey] = useState('');
//     const { title, tipo } = route.params;

//     useEffect(() => {
//         console.log(key.length);
//         if (title == 'Phone') {
//             if (key.length === 11) {
//                 const formattedKey =
//                     '(' +
//                     key.substring(0, 2) +
//                     ')' +
//                     key.substring(2, 7) +
//                     '-' +
//                     key.substring(7, 11);
//                 setKey(formattedKey);
//             }
//             if (key.length < 14) {
//                 if (key.includes('(') || key.includes(')') || key.includes('-')) {
//                     const formattedKey = key.replace('-', '').replace('(', '').replace(')', '');
//                     setKey(formattedKey);
//                 }
//             }
//             console.log(key);
//         }
//         if (title == 'cpf') {
//             if (key.length === 11) {
//                 const formattedKey =
//                     key.substring(0, 3) +
//                     '.' +
//                     key.substring(3, 6) +
//                     '.' +
//                     key.substring(6, 9) +
//                     '-' +
//                     key.substring(9, 11);
//                 setKey(formattedKey);
//             }
//             if (key.length < 14) {
//                 if (key.includes('.') || key.includes('-')) {
//                     const formattedKey = key.replace('.', '').replace('-', '');
//                     setKey(formattedKey);
//                 }
//             }
//         }
//     }, [key]);

//     const verificarKey = () => {
//         if (key) {
//             api.get(`auth/users/${key}`)
//                 .then((res) => {
//                     // Key exists in the API, proceed to 'TelaValor'
//                     navigation.navigate('TelaValor', { title: title, tipo: tipo });
//                 })
//                 .catch((error) => {
//                     // Key does not exist in the API, show an error message or handle accordingly
//                 });
//         }
//     };

//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ flexDirection: 'row', backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 6 }}>
//                 <View style={{ width: 8, paddingHorizontal: 5, paddingVertical: 2 }}>
//                     <VoltarBtn />
//                 </View>
//                 <Text style={{ color: 'white', fontSize: 16 }}>{tipo}</Text>
//                 <View style={{ width: 8, paddingHorizontal: 5, paddingVertical: 2 }} />
//             </View>
//             <View style={{ flex: 1, alignItems: 'center' }}>
//                 <View style={{ height: 14, width: '80%', margin: -7, backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, justifyContent
