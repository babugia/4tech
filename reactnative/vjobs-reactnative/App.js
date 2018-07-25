import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class App extends React.Component {

  renderList() {
    const vagas = [
      {nome: 'Vaga1', id: '1'},
      {nome: 'Vaga2', id: '2'},
      {nome: 'Vaga3', id: '3'},
      {nome: 'Vaga4', id: '4'},
      {nome: 'Vaga5', id: '5'},
      {nome: 'Vaga6', id: '6'},
      {nome: 'Vaga7', id: '7'}
    ]

    const separatorStyle = {
      flexGrow: 1, height: 5, backgroundColor: '#fff'
    }

    return(
      <FlatList data={vagas}
      style={{
        flex:1,
        backgroundColor: 'white'
      }}
      renderItem={({item}) => this.renderItem(item)}
      ItemSeparatorComponent={() => <View style={separatorStyle}/>}
      keyExtractor={(item) => `${item.id}`}
      />
    )
  }

  renderItem(vaga) {
    return (
      <Text style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight:48,
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: '#ccc'
       }} >{vaga.nome} </Text>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderList()}
        <Text>VAI CURINTIA.</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
