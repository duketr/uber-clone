import { View, Text, StyleSheet, Pressable, Alert, Dimensions, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import Button from "../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/styles";


function HomeScreen({navigation}) {
    function tripBookingButtonHandler() {
        console.log('Pressing this button')
    }
    
    return (
        <SafeAreaView style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <MapView
                provider="google"
                style={styles.map}
                initialRegion={{
                    latitude: 21.026988,
                    longitude: 105.788852,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
                showsUserLocation={true}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={() => navigation.navigate('TripOptions')}>Book A Trip</Button>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 16,
        margin: 20
    },
    outerContainer: {
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0)'
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        position: 'relative'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: (Dimensions.get('window').height)/12
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})
