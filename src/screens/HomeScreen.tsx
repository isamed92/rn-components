import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { MenuItem } from '../interfaces/interfaces';
import { FlatListMenuItem } from '../components';


const menuItems: MenuItem[] = [
  {name: 'Animation 01', icon: 'cube-outline', component: 'Animation101Screen'},
  {name: 'Animation 02', icon: 'albums-outline', component: 'Animation102Screen'},
]
export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();


  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de menu</Text>
      </View>
    )
  }

  const renderItemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}>

      </View>
    )
  }
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>

      <FlatList 
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  )
}

