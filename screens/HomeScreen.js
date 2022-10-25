import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

function HomeScreen() {
    function pressHandler({message}) {
        Alert.alert(message)
    }
    
    return (
    <View>
        <Text>This is the Home Screen</Text>
        <Pressable style={styles.button} onPress={HomeScreen}>
            <Text>Press me</Text>
        </Pressable>
    </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 16,
        margin: 20
    }
})