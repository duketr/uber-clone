import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import Button from "../components/ui/Button";

function LoginScreen({navigation}) {
    return (
    <View style={styles.container}>
        <View style={styles.inputContainers}>
            <TextInput 
             textAlign="center"
             placeholder="Email"
            />
        </View>
        <View style={styles.inputContainers}>
            <TextInput 
             textAlign="center"
             placeholder="Phone Number"
            />
        </View>
        <View style={styles.inputContainers}>
            <TextInput 
             textAlign="center"
             placeholder="Password"
            />
        </View>
        <View style={styles.inputContainers}>
            <TextInput 
             textAlign="center"
             placeholder="Re-enter Password"
            />
        </View>
        <View style={styles.buttonContainers}>
            <Button onPress={() => navigation.navigate('NavDrawer')}>Sign Up</Button>
        </View>
        <View style={styles.buttonContainers}>
            <Button onPress={() => navigation.navigate('Login')}>Already have an account? Log In</Button>
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
        backgroundColor: 'white',
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
