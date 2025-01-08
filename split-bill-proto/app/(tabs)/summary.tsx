import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';

import { 
  Avatar,  
  Button, 
  CheckBox, 
  Drawer, 
  DrawerGroup, 
  DrawerItem, 
  Icon, 
  IconElement, 
  Input, 
  Layout, 
  Text, 
} from '@ui-kitten/components';


export default function summary() {
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