import React from 'react'
import { useState }  from 'react'
import { 
  ScrollView, 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Modal 
} from 'react-native'
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { 
  RootState, 
  addDinerItem,
  delDinerItem,
  setDinerColor  
} from '@/store/store';

import { 
  Button, 
  Icon, 
  IconElement, 
  Input, 
  Layout, 
  Text, 
} from '@ui-kitten/components';
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
  const dispatch = useDispatch();
  const diners = useSelector((state: RootState) => state.diners);
  console.log(diners);

  const [value, setValue] = React.useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentDinerIndex, setCurrentDinerIndex] = useState<number>(-1);

  const onSelectColor = (v, index) => {
    console.log(index, v);
    dispatch(setDinerColor({ index, color: v.hex}))
    setShowModal(false)
  };

  const addDiner = () => {
    // TODO: Create new diner item in UI with default color selected
    dispatch(addDinerItem());
    console.log(diners);
  }

  const deleteDiner = (index) => {
    console.log('Delete btn pressed')
    console.log(index);
    dispatch(delDinerItem(index));
  }

  const routeGuard = () => {

    // TODO: add route guards
    /* 
      1. Are there any diners in our state at all?
      2. Does each diner have a name and color?
    */

    router.push('/hydrate-diners')
  }

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
          <Text category='h1'>Diners</Text>
        </Layout>

        {/* TODO: Make dinerContainer scrollable */}
        <Layout 
          style={styles.dinerContainer}
          level='2'
          >

          {diners.map((item, index) => (
            <Layout 
              style={styles.itemContainer}
              level='2'
            >
              <Text>  # {index+1}   </Text>
              <Input
                style={styles.dinerInputName}
                value={item.name}
                placeholder='Name'
                onChangeText={nextValue => setValue(nextValue)}
              />
              <Button
                appearance='outline'
                size='small'
                onPress={() => {
                  setCurrentDinerIndex(index);
                  setShowModal(true);

                }}
                style={ {...styles.colorPickerBtn, backgroundColor: item.color }}
              />
              {/* // TODO: Get modal to be styled */}
              <Modal 
                visible={showModal} 
                animationType='slide'
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setShowModal(false)}
                style={styles.colorSelectorModal}
              >
                <ColorPicker 
                  style={{ width: '100%' }} 
                  // TODO: get index to be right when changing color of diner
                  onComplete={ (v) => onSelectColor(v, currentDinerIndex)}>
                  <PreviewText/>
                  <Panel5/>
                </ColorPicker>
              </Modal>    
              <Button
                appearance='ghost'
                size='small'
                accessoryLeft={DeleteIcon}
                style={styles.deleteIconBtn}
                onPress={() => deleteDiner(index)}
              />
            </Layout>
          ))}
          <Button
          appearance='ghost'
          size='giant'
          accessoryLeft={PlusIcon}
          style={styles.plusIconBtn}
          onPress={addDiner}
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
            onPress={routeGuard}
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
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  dinerContainer: {
    // flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    padding: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  dinerInputName: {
    flex: 30,
    marginRight: 10,
  },
  colorPickerBtn: {
    width: 26,
    height: 26,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#8F9BB3',
    marginRight: 10,
  },
  deleteIconBtn: {
    flex: 1,
    borderRadius: 10,
  },
  deleteIcon: {
    width: 18,
    height: 18,
    tintColor: '#8F9BB3',
  },
  plusIcon: {
    width: 36,
    height: 36,
    tintColor: '#8F9BB3',
  },
  plusIconBtn: {
    marginTop: 10,
    width:'20%',
    borderRadius: 100,
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
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  colorSelectorModal: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '10%',
    // margin: '10%',
    // flex: 1,
    // height: '100%',
    backgroundColor: 'red'
  }


})