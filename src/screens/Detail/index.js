import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Detail(props) {
  const {title, content} = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt_title}>DATA FROM MESSEAGE</Text>
        <Text style={styles.section_txt}>TITLE: {title}</Text>
        <Text style={styles.section_txt}>CONTENT: {content}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  wrapper: {
    position: 'absolute',
    top: 100,
  },
  txt_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  section_txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginVertical: 10,
  },
});
