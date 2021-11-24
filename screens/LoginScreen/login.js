import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';


export default function Login({ navigation }) {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const [users, setUsers] = useState([]);

    const handleLogin = async () => {
        setErrortext('');
        if ((!userEmail) || (!userPassword)) {
            setErrortext('Both email and password are required');
            return;
        }

        for (let i = 0; i < users.length; i++) {
            if (userEmail == users[i][0]) {
                if (userPassword == users[i][1]) {
                    navigation.replace("MainTabScreen")
                    return

                } else {
                    return alert("wrong password");
                }
            }
        }
        const update = [...users, [userEmail, userPassword]];
        console.log(update)
        await AsyncStorage.setItem("users", JSON.stringify(update));
        getUsersArray();
        return alert("Registered");

        



    };
    const getUsersArray = async () => {
        
        if (!(await AsyncStorage.getItem("users"))) {
            await AsyncStorage.setItem(
                "users",
                JSON.stringify([[
                    "mimz@gmail.com", "1212", 33.88048367690405, 35.4964979365468,
                ]])
            );
        }
        const user = await AsyncStorage.getItem("users");
        setUsers(JSON.parse(user));
    };

    useEffect(() => {
        getUsersArray();


    }, []);
    return (


        <ImageBackground source={require('../../pictures/E-Butler Task.jpg')} style={styles.img}>
            <View style={styles.logindiv}>

            </View>
            <View style={styles.logodiv}>
               

            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="user" style={{ fontSize: 16 }} /> Email Address</Text>
                <TextInput style={styles.inputs} placeholder=' Enter your email address' keyboardType='email-address'
                    onChangeText={(UserEmail) => { setUserEmail(UserEmail); setErrortext('') }} />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="lock" style={{ fontSize: 16 }} /> Password</Text>
                <TextInput style={styles.inputs} secureTextEntry={true} placeholder=' Enter your password' keyboardType='email-address'
                    onChangeText={(UserPassword) => { setUserPassword(UserPassword); setErrortext('') }} />
            </View>

            <View style={styles.buttonView}>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>
                        {errortext}
                    </Text>
                ) : null}
                <Pressable style={styles.button} onPress={handleLogin} >
                    <Text style={styles.btntext}>Login</Text>
                </Pressable>


            </View>

        </ImageBackground>


    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: null,
        width: null,
        justifyContent: 'center',
        textAlign: 'center'

    },
    img: {
        height: Dimensions.get('window').height,
        overflow: 'hidden',
        marginTop: 0,
        zIndex: 2
    },
    logindiv: {
        marginTop: 190,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        height: 292,
        opacity: 0.85
    },
    logodiv: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -270,
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 15
    },
    logocontainer: {
        alignItems: 'center',
        zIndex: 2,
        opacity: 1

    },
    logotext: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    form: {
        marginTop: 17
    },
    label: {
        color: '#008db9',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 40,
    },
    inputs: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        border: " 2px solid #008db9",
        marginLeft: 30,
        marginRight: 30
    },
    buttonView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 122,
        borderRadius: 50,
        elevation: 4,
        backgroundColor: '#008db9',
        marginTop: 15
    },
    btntext: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        opacity: 1
    },
});