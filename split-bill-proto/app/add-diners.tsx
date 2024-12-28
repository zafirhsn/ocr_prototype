import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useState }  from 'react'

import { Button, Layout, Text, Icon, IconElement, Input } from '@ui-kitten/components';

const PlusIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='plus-outline'
    style={styles.plusIcon}
  />
);

const PriceIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='pricetags-outline'
    // style={styles.plusIcon}
  />
);


export default function addDiners() {
  const [value, setValue] = React.useState('');
  return (
    <Layout style={styles.container}>
      <Layout style={styles.itemContainer}>
        <Input
          style={styles.itemInputDish}
          value={value}
          label='Item 1'
          placeholder='Dish name'
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Input
          style={styles.itemInputPrice}
          value={value}
          label='Price'
          placeholder='$'
          onChangeText={nextValue => setValue(nextValue)}
        />
      </Layout>


      <Button
        appearance='ghost'
        size='giant'
        accessoryLeft={PlusIcon}
        style={styles.plusIconBtn}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  plusIcon: {
    width: 48,
    height: 48,
    tintColor: '#8F9BB3',
  },
  plusIconBtn: {
    width:'30%',
    borderRadius: 100,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemInputDish: {
    // paddingRight: 10,
    width: '60%',
  },
  itemInputPrice: {
    width: '35%',
  }


})