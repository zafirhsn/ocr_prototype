import { SafeAreaView, Pressable, View, Alert, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';

import { Button, Layout, Text } from '@ui-kitten/components';



const app = () => {
  const router = useRouter();
  return (
    <Layout style={styles.container}>
      
            {/* TODO: Add a button to Start a new bill  */}
            {/* TODO: Add a transition to next screen */}
      <Layout style={styles.newBillBtnView}>
        <Button
        status='basic'
        // appearance='outline'
        size='giant'
        style={styles.newBillBtn}
          // TODO: Add new bill function
          onPress={() => router.push('/add-bill')}
        >
          <Text>New Bill</Text>
        </Button>
      </Layout>
    </Layout>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '0%'
  },
  newBillBtnView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: '40%'
  },
  newBillBtn: {
    width: '80%',
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    // TODO: Make text follow theme of app
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  }
})