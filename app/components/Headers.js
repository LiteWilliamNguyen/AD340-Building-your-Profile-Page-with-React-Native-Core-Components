import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Headers = () => {
    <View style={styles.headers}>
        <Text style = {styles.headerText}>My Profile</Text>
    </View>
};

const styles = StyleSheet.create({
    headers: {
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Headers;