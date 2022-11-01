import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({children, onPress}) {
    return (
        <View>
            <Pressable
            style={({pressed}) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}
            onPress={onPress}>
                <View>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default Button;
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 5,
        paddingVertical: 10,
        minWidth: (Dimensions.get('window').width)/1.3,
        borderWidth: 1,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    }
})
