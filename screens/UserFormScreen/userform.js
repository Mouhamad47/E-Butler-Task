import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../server/api';

export default function UserForm() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [errortext, setErrortext] = useState('');
    const handleLogin = () => {
        setErrortext('');
        if ((!userName) || (!userEmail)||(!userPassword)||(!userDescription)) {
            setErrortext('All fields  are required');
            return;
        }
        let dataToSend = {name: userName ,email: userEmail, password: userPassword, descriptionn: userDescription };
        api.addUser(dataToSend, { headers: { 'Accept': "application/json", 'content-type': "application/json" } })
          
    };
    return (
        <View >
            <View style={styles.logindiv}>

            </View>
            <View style={styles.logodiv}>


            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="user" style={{ fontSize: 16 }} /> Name</Text>
                <TextInput style={styles.inputs} placeholder=' Enter your name' keyboardType='default'
                    onChangeText={(UserName) => { setUserName(UserName); setErrortext('') }} />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="envelope" style={{ fontSize: 16 }} /> Email Address</Text>
                <TextInput style={styles.inputs} placeholder=' Enter your email address' keyboardType='email-address'
                    onChangeText={(UserEmail) => { setUserEmail(UserEmail); setErrortext('') }} />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="lock" style={{ fontSize: 16 }} /> Password</Text>
                <TextInput style={styles.inputs} secureTextEntry={true} placeholder=' Enter your password' keyboardType='default'
                    onChangeText={(UserPassword) => { setUserPassword(UserPassword); setErrortext('') }} />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="comment" style={{ fontSize: 16 }} /> Description</Text>
                <TextInput style={styles.inputs} placeholder=' Enter a description' keyboardType='default'
                    onChangeText={(UserDescription) => { setUserDescription(UserDescription); setErrortext('') }} />
            </View>

            <View style={styles.buttonView}>

                <Pressable style={styles.button} onPress={handleLogin} >
                    <Text style={styles.btntext}>Submit</Text>
                </Pressable>


            </View>

        </View>
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
        backgroundColor: 'white',
        height: 525,
        opacity: 0.85
    },
    logodiv: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -480,
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