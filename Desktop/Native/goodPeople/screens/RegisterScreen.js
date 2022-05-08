import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import { Picker } from '@react-native-picker/picker';
//import { Picker as SelectPicker } from '@react-native-picker/picker';


function RegisterScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [country, setCountry] = useState('Unknown');



    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation]);

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl ||
                        "https://www.b17.ru/foto/uploaded/d6b2b5df8f21eacde1d3a2b563c7c18e.jpg",
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 30 }}>
                Create account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)} />

            <View style={styles.screen}>
                    <Picker
                        selectedValue={ country }
                        onValueChange={(value, index) => setCountry(value)}
                        mode="dropdown" // Android only
                        style={styles.picker}
                    >
                        <Picker.Item label="Please select your country" value="Unknown" />
                        <Picker.Item  label="Ukraine" value="Ukraine" />
                        <Picker.Item  label="Romania" value="Romania" />
                        <Picker.Item  label="Moldova" value="Moldova" />
                        <Picker.Item  label="Latvia" value="Latvia" />
                        <Picker.Item  label="Lithuania" value="Lithuania" />
                        <Picker.Item  label="Poland" value="Poland" />
                        <Picker.Item  label="Germany" value="Germany" />
                        <Picker.Item  label="Hungary" value="Hungary" />
                        <Picker.Item  label="Italy" value="Italy" />
                        <Picker.Item  label="Czech Republic" value="Czech" />
                        <Picker.Item  label="Slovakia" value="Slovakia" />
                        <Picker.Item  label="Estonia" value="Estonia" />
                        <Picker.Item  label="Austria" value="Austria" />
                        <Picker.Item  label="Slovakia" value="Slovakia" />
                        <Picker.Item  label="Greece" value="Greece" />
                        <Picker.Item  label="Netherlands" value="Netherlands" />
                        <Picker.Item  label="Sweden" value="Sweden" />
                        <Picker.Item  label="Ireland" value="Ireland" />
                        <Picker.Item  label="France" value="France" />
                        <Picker.Item  label="Spain" value="Spain" />
                        <Picker.Item  label="Denmark" value="Denmark" />
                        <Picker.Item  label="Luxembourg" value="Luxembourg" />
                        <Picker.Item  label="Belgium" value="Belgium" />
                        <Picker.Item  label="Finland" value="Finland" />
                        <Picker.Item  label="United Kingdom" value="United Kingdom" />
                        <Picker.Item  label="USA" value="USA" />
                        <Picker.Item  label="Belarus" value="Belarus" />
                        <Picker.Item  label="Russia" value="Russia" />
                    </Picker>
                    <Text style={styles.textCountry}>Your conuntry: {country} </Text>
                </View>

                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)} />

                <Input
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)} />

                <Input
                    placeholder="URL"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register} />
            </View>

            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },

    button:{
        width: 100,
        marginTop: 10,
    },

    inputContainer: {
        width: 300,
    },

    picker: {
        marginVertical: 10,
        width: 300,
        padding: 5,
        borderWidth: 1,
        borderColor: "#666",
    },

    textCountry: {
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: 18,
        
    },

});