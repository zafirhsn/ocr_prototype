import { SafeAreaView, StyleSheet, View, Modal } from 'react-native'
import React from 'react'
import { useState }  from 'react'

import { useRouter } from 'expo-router';

import { Button, Layout, Text, Icon, IconElement, Input } from '@ui-kitten/components';
import ColorPicker, { Panel5, Swatches, Preview, PreviewText, OpacitySlider, HueSlider } from 'reanimated-color-picker';

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

export default function addDiners() {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  const [showModal, setShowModal] = useState(false);

  const onSelectColor = ({ hex }: any) => {
    // do something with the selected color.
    console.log(hex);
    setShowModal(false)
  };

  return (
    <Layout 
      style={styles.container}
      level='1'
    >

      <Layout 
        style={styles.headerContainer}
        level='1'>
        <Text category='h1'>Diners</Text>
      </Layout>

      {/* TODO: Make dinerContainer scrollable */}
      <Layout 
        style={styles.dinerContainer}
        level='2'
        >
        <Layout 
          style={styles.itemContainer}
          level='2'
          >
          <Input
            style={styles.itemInputDish}
            value={value}
            placeholder='Name'
            onChangeText={nextValue => setValue(nextValue)}
          />

          {/* TODO: Avatar button that contains randomly generated color
            1. Click to open modal and change color of person. Closes modal right after */}
          <Button
            appearance='ghost'
            size='small'
            onPress={() => setShowModal(true)}
            style={styles.colorPickerBtn}/>
          <Modal 
            visible={showModal} 
            animationType='slide'
            >
            <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
              <PreviewText/>
              <Panel5/>
            </ColorPicker>
          </Modal>
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
          onPress={() => router.push('/hydrate-diners')}
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
  dinerContainer: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    paddingTop: 15,
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  itemInputDish: {
    // paddingRight: 10,
    width: '60%',
  },
  itemInputPrice: {
    width: '20%',
  },
  colorPickerBtn: {
    width: 26,
    height: 26,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#8F9BB3',
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