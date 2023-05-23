import { Pressable, View, Text } from "react-native-web";


const ValorBtn = ({ valor }) => {

    return (
            <Pressable className="border-2 flex px-5 rounded-full">
                <Text className="text-lg font-medium">+{valor}</Text>
            </Pressable>
    );
}

export default ValorBtn;