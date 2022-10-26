import { View, Pressable, Text, StyleSheet } from "react-native";

function Button({children, onPress}) {
    return (
        <View>
            <Pressable onPress={onPress}>
                <View>
                    <Text>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default Button;
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})