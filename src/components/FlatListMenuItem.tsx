import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <View style={styles.container}>
          <Icon name={menuItem.icon} color='grey' size={23}/>
          <Text style={styles.itemText}>
            {menuItem.name}
          </Text>
          {/* tambien llamado Spacer, hace que ocupe todo el espacio entre comps */}
          <View style={{flex: 1}}></View>
          <Icon name='chevron-forward-outline' color='grey' size={23}/>
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    },
    // nextIcon: {
    //     position: 'absolute',
    //     right: 0
    // }
    
});