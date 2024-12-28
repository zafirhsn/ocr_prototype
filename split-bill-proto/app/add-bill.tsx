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

export default function addBill() {
  const [value, setValue] = React.useState('');
  return (
    <Layout 
      style={styles.container}
      level='1'
      >
      <Layout style={styles.headerContainer}>
        <Text category='h1'>Bill</Text>
      </Layout>

      <Layout 
        style={styles.billContainer}
        level='1'
        >
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
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    padding: '5%',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  plusIcon: {
    width: 44,
    height: 44,
    tintColor: '#8F9BB3',
  },
  plusIconBtn: {
    marginTop: 20,
    width:'25%',
    borderRadius: 100,
  },
  billContainer: {
    flex: 11,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemInputDish: {
    width: '60%',
  },
  itemInputPrice: {
    width: '35%',
  }


})