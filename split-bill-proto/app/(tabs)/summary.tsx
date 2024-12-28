import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';

import { Button, Layout, Text, Icon, IconElement, Input, Drawer, DrawerGroup, DrawerItem, CheckBox, Avatar  } from '@ui-kitten/components';


export default function summary() {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <Layout 
      style={styles.container}
      level='1'
    >

      {/* Drawer container for each diner's summary
          1. Lines for each item, cost at right
          2. Share of tip and tax
          3. Drawer UI has number, color, name, cost to right, and edit symbol */}
      <Layout>
        <Drawer
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
        >
          <DrawerGroup
            title='Zafir'>
            <DrawerItem
              title='Item 1'>

            </DrawerItem>
            <DrawerItem
              title='Item 2'>

            </DrawerItem>
            <DrawerItem
              title='Item 3'>

            </DrawerItem>
            <DrawerItem
              title='Item 4'>

            </DrawerItem>
          </DrawerGroup>
        </Drawer>

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