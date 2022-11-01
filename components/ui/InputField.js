import { View, Text, StyleSheet, TextInput } from "react-native";

function InputField() {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <TextInput/>
        </View>
    );
}
export default InputField;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})