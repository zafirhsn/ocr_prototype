import { ScrollView, SafeAreaView, StyleSheet, View, Modal } from 'react-native'
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

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        horizontal={false}
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
          {/* TODO: Will this be tabbed UI of diners? */}

          {/* Avatar Layout */}
          <Layout
            level='2'
          > 
            <Avatar source={require('../../assets/images/icon.png')} />
          </Layout>

          {/* Diner name layout */}
          <Layout
            level='2'
          >
            <Text category='h3'>Zafir</Text>
          </Layout>

          {/* Items Layout */}
          <Layout
            level='3'
          >
            <Text category='h6'>Items</Text>
          </Layout>

          {/* Confirm button layout */}
          <Layout
            level='2'
          > 
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

      </ScrollView>



    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    padding: '1%',
  },
  scrollContainer: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  drawerContainer: {
    // flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
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