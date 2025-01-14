import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useState }  from 'react'

import { useRouter } from 'expo-router';

import { 
  Avatar,
  Button, 
  Card,
  CheckBox,
  Drawer,
  DrawerGroup, 
  DrawerItem, 
  Icon, 
  IconElement, 
  Input, 
  Layout, 
  Modal,
  Select, 
  SelectItem,
  Text, 
} from '@ui-kitten/components';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';


export default function hydrateDiners() {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

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

            {/* Actual item layout */}
            <Layout
              level='2'
            >
              <Text category='h6'>Items</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
              >
                <SelectItem title='Option 1' />
                <SelectItem title='Option 2' />
                <SelectItem title='Option 3' />
              </Select>
              <Button onPress={() => setVisible(true)}>
                Shared
              </Button>
              <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
              >
                <Card disabled={true}>
                  <Text>
        Welcome to UI Kitten 😻
                  </Text>
                  <Button onPress={() => setVisible(false)}>
                    DISMISS
                  </Button>
                </Card>
              </Modal>
            </Layout>
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
    flexDirection: 'column',
    width: '100%',
    minHeight: '100%',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  nextBtn: {
    width: '40%',
    borderRadius: 100,
  }


})