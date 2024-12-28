import { SafeAreaView, StyleSheet, View, Modal } from 'react-native'
import React from 'react'
import { useState }  from 'react'

import { useRouter } from 'expo-router';

import { Button, Layout, Text, Icon, IconElement, Input, Drawer, DrawerGroup, DrawerItem, CheckBox, Avatar  } from '@ui-kitten/components';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';


export default function hydrateDiners() {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <Layout 
      style={styles.container}
      level='1'
    >

      <Layout 
        style={styles.headerContainer}
        level='1'>
        <Text category='h1'>Hydrate Diners</Text>
      </Layout>

      <Layout
        style={styles.drawerContainer}
        level='2'
        >
        <Drawer
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
          style={styles.drawer}
        >
          <DrawerGroup
            title='Akveo React Native'
          >
            <DrawerItem
              title='UI Kitten'
            />
            <DrawerItem
              title='Kitten Tricks'
            />
          </DrawerGroup>
          <DrawerGroup
            title='Akveo Angular'
          >
            <DrawerItem
              title='Nebular'
            />
            <DrawerItem
              title='ngx-admin'
            />
            <DrawerItem
              title='UI Bakery'
            />
          </DrawerGroup>

        </Drawer>
      </Layout>

      <Layout
        style={styles.dinerContainer}
        >
        {/* Header container
            1. Avatar w/ color circle
            2. Heading w/ name  */}
        <Layout>

          <Avatar source={require('../../assets/images/icon.png')} />

          <Text category='h4'>Zafir</Text>

        </Layout>

        {/* Checkbox container
            1. Checkboxes w/ each dish
            2. Should be scrollable */}
        
        <Layout>

          <CheckBox>Chicken</CheckBox>
          <CheckBox>Beef</CheckBox>
          <CheckBox>Pork</CheckBox>
          <CheckBox>Vegetables</CheckBox>
          <CheckBox>Seafood</CheckBox>
          <CheckBox>Drinks</CheckBox>
          <CheckBox>Desert</CheckBox>

        </Layout>
        
        {/* Confirm container
            1. Confirmation button */}

        <Layout>

          <Button>Confirm</Button>

        </Layout>

      </Layout>

      <Layout 
        style={styles.nextContainer}
        level='1'>
        <Button
          appearance='outline'
          status='success'
          size='large'
          style={styles.nextBtn}
          onPress={() => router.push('/summary')}
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
  drawerContainer: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    // paddingTop: 15,
  },
  drawer: {
    width: '100%',
    borderRadius: 8,
  },
  dinerContainer: {

  },
  nextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  nextBtn: {
    width: '40%',
    borderRadius: 100,
  }


})