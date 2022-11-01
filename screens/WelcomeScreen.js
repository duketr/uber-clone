import { View, Text, StyleSheet, Dimensions } from "react-native";
import Button from '../components/ui/Button'
import { TRIP_HISTORY } from "../data/dummy-data";

function WelcomeScreen({navigation}) {
    return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button onPress={() => navigation.navigate('Login')}>Get Started</Button>
        </View>
    </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
    buttonContainer: {
        paddingBottom: Dimensions.get('window').height/8,
    }
})