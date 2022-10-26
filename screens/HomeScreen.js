import { View, Text, StyleSheet, Pressable, Alert, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Button from "../components/ui/Button";

function HomeScreen() {

    
    return (
    // <View>
    //     <Text>This is the Home Screen</Text>
    //     <Pressable style={styles.button} onPress={HomeScreen}>
    //         <Text>Press me</Text>
    //     </Pressable>
        
    // </View>
        <>
            <View style={styles.container}>
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
            </View>
            <View style={styles.buttonContainer}>
                {/* <Text>Testing</Text> */}
                <Button>Hello</Button>
            </View>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 16,
        margin: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    buttonContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
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
