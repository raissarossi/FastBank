import { Pressable, Text, View, Linking } from "react-native";

const CreateAccount = () => {
    return (
        <View className="flex flex-row">
            <Text className="">Don't have an Account?</Text>
            <Pressable onPress={()=>Linking.openURL("https://fastbank-rai.vercel.app")}>
                <Text className="text-light-blue3 pl-2">Create</Text>
            </Pressable>
        </View>
    );
}

export default CreateAccount;