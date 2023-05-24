import { Pressable, View, Text } from "react-native-web";


const ValorBtn = ({ valor, onPress }) => {

    return (
            <Pressable className="border-2 flex w-3/12 items-center rounded-full" onPress={onPress}>
                <Text className="text-lg font-medium">+{valor}</Text>
            </Pressable>
    );
}

export default ValorBtn;

