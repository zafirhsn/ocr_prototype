import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useState }  from 'react'

import { useRouter } from 'expo-router';

import { Button, Layout, Text, Icon, IconElement, Input } from '@ui-kitten/components';

const PlusIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='plus-outline'
    style={styles.plusIcon}
  />
);

const DeleteIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='trash-2-outline'
    style={styles.deleteIcon}
  />
);

export default function addBill() {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  return (
    <Layout 
      style={styles.container}
      level='1'
      >
      <Layout 
        style={styles.headerContainer}
        level='1'>
        <Text category='h1'>Bill</Text>
      </Layout>

      {/* TODO: Make billContainer scrollable */}
      <Layout 
        style={styles.billContainer}
        level='2'
        >
        <Layout 
          style={styles.itemContainer}
          level='2'>
          <Input
            style={styles.itemInputDish}
            value={value}
            placeholder='Dish name'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            style={styles.itemInputPrice}
            value={value}
            placeholder='$'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Button
            appearance='ghost'
            size='small'
            accessoryLeft={DeleteIcon}
            style={styles.deleteIconBtn}
          />
        </Layout>

        <Button
          appearance='ghost'
          size='giant'
          accessoryLeft={PlusIcon}
          style={styles.plusIconBtn}
        />
      </Layout>

      <Layout 
        style={styles.nextContainer}
        level='1'>
        <Button
          appearance='outline'
          status='success'
          size='large'
          style={styles.nextBtn}
          onPress={() => router.push('/add-diners')}
        >    
          <Text>Next</Text>
        </Button>
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
    padding: '3%',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#8F9BB3',
  },
  deleteIconBtn: {
    // marginTop: 18,
    width:'10%',
    borderRadius: 10,
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
    flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    paddingTop: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  // TODO: Have input field outlines follow theme of app
  itemInputDish: {
    width: '50%',
  },
  itemInputPrice: {
    width: '25%',
  },
  nextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    // marginBottom: 10,
  },
  nextBtn: {
    width: '40%',
    borderRadius: 100,
  }
})