import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal, DrawerLayoutAndroidComponent } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from "../styles/style";
import Form from "./Form";

export default function Main({ navigation }) {
    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool', key: '1', img: 'https://www.google.ge/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'},
        {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool', key: '2', img: 'data:image/jpeg;base64,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'},
        {name: 'Facebook', anons: 'Facebook!!!', key: '3', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png', full: 'Facebook is cool'},
    ]);

    const [modalWindow, setModalWindow] = useState(false);
    const addArticle = (article)=>{
        setNews((list)=> {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return(

        <View style ={gStyle.main}>
            <Modal visible = {modalWindow}>
                <View style={gStyle.main}>
                <Ionicons name="close" size={34} style={styles.IconClose} color="red" onPress={() => setModalWindow(false)} />
                <Text style={styles.title}>Форма добавления статей</Text> 
                <Form addArticle={addArticle}/>
                </View>
            </Modal>

            <Ionicons name="add-circle" size={34} style={styles.IconAdd} color="green" onPress={() => setModalWindow(true)} />
            <Text style={gStyle.title}>Главная страница</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{
                        uri: item.img
                    }}/>
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>
                    </TouchableOpacity>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({

    IconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },

    IconClose: {
        textAlign: 'center',
    },

    header:{
        marginBottom:30

    }, item:{
        width:'100%',
        marginBottom:30
    },

    title:{
        fontFamily: 'os-bold',
        fontSize: 16,
        textAlign:'center',
        marginTop: 5,
        color: '#474747'
    },

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },

});

