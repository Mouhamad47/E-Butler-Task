import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import api from '../../server/api';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Users() {

    const [filteredData, setFilteredData] = useState([]);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    const getUsers = async () => {
        api.getAllUsers().then((response) => {

            setUsers(response.data);
            setFilteredData(response.data);
            console.log(response.data);

        })
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = users.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setFilteredData(newData);
            setSearch(text);
        }
        else {
            setFilteredData(users);
            setSearch(text)
        }
    }

    useEffect(() => {
        getUsers();

    }, [])


    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={styles.title}>
                <TextInput
                    style={styles.searchInput}
                    placeholder=' Search for a user'
                    value={search}
                    onChangeText={(text) => searchFilter(text)} />
            </View>
            <ScrollView>
                <FlatList
                    style={{ backgroundColor: 'white', height: 522 }}
                    data={filteredData}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.consultationView} >
                                <View style={{ flex: 4 }}>
                                    <View style={styles.nameView}>
                                        <Text style={styles.nameText}>{item.name}</Text>
                                    </View>
                                    <View style={styles.infoView}>
                                        <Text style={styles.infoText}><Icon name="envelope" style={{ fontSize: 15 }} />  {item.email}</Text>
                                        <Text style={styles.infoText}><Icon name="comment" style={{ fontSize: 15 }} />  {item.description}</Text>
                                    </View>
                                </View>
                                <View style={styles.avatarImage}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={item.avatar} />
                                </View>
                            </View>
                        )
                    }}
                />
            </ScrollView>

        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        padding: 10
    },
    titleText: {
        fontSize: 25,
        fontWeight: 700,
        color: 'white',
        letterSpacing: 1,
    },
    consultationView: {
        backgroundColor: '#008db9',
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row'

    },
    consultationDate: {
        padding: 10
    },
    consultationDateText: {
        fontWeight: 600,
        color: 'white',
    },
    nameView: {
        paddingTop: 5,
        paddingLeft: 10

    },
    nameText: {
        fontSize: 16,
        fontWeight: 500,
        color: 'white',
    },
    infoView: {
        padding: 10
    },
    avatarImage: {
        textAlign: 'center',
        marginTop: 20,
        flex: 2,
        marginLeft: 75,
    },
    infoText: {
        color: 'white'
    },
    searchInput: {
        padding: 10,
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
        border: " 2px solid #008db9",


    }
});