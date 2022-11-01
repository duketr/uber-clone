import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import Button from "../components/ui/Button";

function LoginScreen({navigation}) {
    return (
    <View style={styles.container}>
        <View style={styles.inputContainers}>
            <TextInput
             textAlign="center"
             placeholder="Email/Phone Nunmber"
            />
        </View>
        <View style={styles.inputContainers}>
            <TextInput 
             textAlign="center"
             placeholder="Password"
            />
        </View>
        <View style={styles.buttonContainers}>
            <Button onPress={() => navigation.navigate('NavDrawer')}>Log In</Button>
        </View>
        <View style={styles.buttonContainers}>
            <Button onPress={() => navigation.navigate('Signup')}>Sign Up Instead?</Button>
        </View>
    </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    buttonContainers: {
        margin: 10
    },
    inputContainers: {
        borderWidth: 2,
        borderColor: '#aaa',
        minWidth: Dimensions.get('window').width/1.5,
        minHeight: Dimensions.get('window').height/30,
        marginVertical: 5
    } 
})
