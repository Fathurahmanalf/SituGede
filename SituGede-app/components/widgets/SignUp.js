import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';

const SignUp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.Title}>Sign Up</Text>
            </View>
        </SafeAreaView>
    );
}

export default SignUp;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    Title: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        margin:40,
    },
})
