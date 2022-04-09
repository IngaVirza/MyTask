import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function Contacts({ route }){
    return(
        <View style={gStyle.main}>
             <Image style={styles.image} source={{
                        uri: route.params.img
                    }}/>

            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text>{route.params.full}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },

    full: {
        fontFamily: 'os-italic',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151'
    },
    header:{
        fontSize:25,
        marginTop: 25
    }
}); 