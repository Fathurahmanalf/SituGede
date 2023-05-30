import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SignIn = () => {
    return (
       <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.Title}>Sign In</Text>
            </View>
            <View style={{flex:1, justifyContent:'flex-end', marginBottom:40}}>
                <View>
                    <TextInput
                        style={styles.InputText}
                        placeholder='Email Address' />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.InputText}
                        placeholder='Password' />
                </View>
                <TouchableOpacity 
                    Title="Sign In"
                    style={styles.SignInButton} >
                    <Text style={styles.Text}>Sign In</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent: 'center'}}>
                    <View style={styles.Line}></View>
                    <Text style={{...styles.Text,justifyContent:'center'}}>Or</Text>
                    <View style={styles.Line}></View>
                </View>
                <TouchableOpacity
                    Title="Google Sign In"
                    style={styles.SignInButton} >
                    <Text style={styles.Text} >Google</Text>
                </TouchableOpacity>
                <View style={{...styles.SignUpButton,flexDirection:'row'}}>
                    <Text>Don't have an account?</Text>
                    <Text style={{marginHorizontal:10, color:"green"}}>Sign Up</Text>
                </View>
            </View>
       </SafeAreaView>
    );
}

export default SignIn;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    Title: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        margin:40
    },
    Text: {
        fontSize: 12,
        textAlign:'center',
        fontWeight: 600
    },
    InputText: {
        height: 40,
        marginHorizontal: 40,
        marginVertical:10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        color:'gray',
        backgroundColor: "white"
    },
    Line: {
        width:"40%",
        borderWidth: 2,
        margin:10,
        borderRadius:2,
    },
    SignInButton: {
        height: 40,
        marginHorizontal:"30%",
        marginVertical:10,
        borderRadius: 40,
        borderWidth:1,
        justifyContent: 'center',
    },
    SignUpButton: {
        justifyContent: 'center',
        marginVertical:10
    },
    Background: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
})