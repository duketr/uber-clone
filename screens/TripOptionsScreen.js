import { View, Text, StyleSheet } from "react-native";

function TripOptionsScreen() {
    return (
    <View style={styles.container}>
        <Text>This is the Trip Options Screen</Text>
    </View>
    );
}

export default TripOptionsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})