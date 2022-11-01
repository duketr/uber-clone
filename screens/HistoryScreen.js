import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { TRIP_HISTORY } from "../data/dummy-data";

const HistoryItem = ({id, date, type, cost, startDestination, endDestination}) => (
<View style={styles.historyDataContainer}>
    <Text>- {date.toString().substring(0,10)}</Text>
    <Text>- {type}</Text>
    <Text>- {cost}</Text>
    <Text>- {startDestination}</Text>
    <Text>- {endDestination}</Text>
</View>
)

function renderHistory(historyData) {
    return <HistoryItem {...historyData.item}/>
}

function HistoryScreen() {
    return (
    <View style={styles.container}>
        <Text>This is the History Screen</Text>
        <FlatList 
            data={TRIP_HISTORY}
            renderItem={renderHistory}
            keyExtractor={(item) => item.id}
        />
    </View>
    );
}

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    historyDataContainer: {
        borderWidth: 1,
        margin: 10,
        padding: 10
    }
})
