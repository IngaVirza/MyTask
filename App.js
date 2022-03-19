import React, {useState} from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App(){
  const [listOfItems, setListOfItems] =useState([
    {text: 'Learn HTML/CSS', key: '1'},
    {text: 'Learn JavaScript', key: '2'},
    {text: 'Learn React', key: '3'},
    {text: 'Learn TypeScript', key: '4'},
    {text: 'Learn Angular', key: '5'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(9) },
        ...list
      ]
    })
  }
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems=>listOfItems.key!=key)
    });
}

  return(
    <View>
      <Header/>
      <Form addHandler ={addHandler}/>
      <View>
      <FlatList data={listOfItems} renderItem ={({item})=>(
        <ListItem el={item} deleteHandler={deleteHandler}/>
      )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});