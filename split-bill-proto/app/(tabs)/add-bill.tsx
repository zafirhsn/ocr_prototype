import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useState }  from 'react'

import { useRouter } from 'expo-router';

import { 
  Button, 
  Layout, 
  Text, 
  Icon, 
  IconElement, 
  Input,
  Select, 
  SelectItem,
  IndexPath } from '@ui-kitten/components';

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
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));
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
          <Text category='h1'>Bill</Text>
        </Layout>

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
            <Select
              style={styles.itemInputQty}
              selectedIndex={selectedIndex}
              onSelect={index => setSelectedIndex(index)}
            >
              <SelectItem title='1' />
              <SelectItem title='2' />
              <SelectItem title='3' />
              <SelectItem title='4' />
              <SelectItem title='5' />
            </Select>
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



        </Layout>

        <Layout
          style={styles.summaryContainer}
          level='2'
        >
          <Layout
            style={styles.extrasContainer}
            level='2'
          >
            <Text category='h6'>Tax: </Text>
            <Input
              style={styles.extrasInput}
              value={value}
              placeholder='Amount'
            />
            <Select
              style={styles.extrasType}
              selectedIndex={selectedIndex}
              onSelect={index => setSelectedIndex(index)}
            >
              <SelectItem title='%' />
              <SelectItem title='$' />
            </Select>
          </Layout>



        <Layout
          style={styles.extrasContainer}
          level='2'
        >
          <Text category='h6'>Tip: </Text>
          <Input
            style={styles.extrasInput}
            value={value}
            placeholder='Dish name'
          />
          <Select
            style={styles.extrasType}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
            >
              <SelectItem title='%' />
              <SelectItem title='$' />
          </Select>
        </Layout>
          <Text category='h6'>Total: </Text>
        </Layout>

        <Layout
          style={styles.btnContainer}
          level='1'
        >
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
    // flex: 1,
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  billContainer: {
    // flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    padding: 8,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  // TODO: Have input field outlines follow theme of app
  itemInputDish: {
    flex: 30,
    marginRight: 10,
  },
  itemInputQty: {
    flex: 16,
    marginRight: 10,
  },
  itemInputPrice: {
    flex: 16,
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
  summaryContainer: {
    // flex: 2,
    flexDirection: 'column',
    borderRadius: 10,
    padding: 8,
    marginBottom: 8,
    // width: '100%',
  },
  extrasContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  extrasInput: {
    // flex: 6,
    width: '40%',
    marginRight: 10,
    borderRadius: 10,
  },
  extrasType: {
    // flex: 2,
    width: '20%',
    marginRight: 10,
    borderRadius: 10,
  },
  btnContainer: {
    marginBottom: 10, 
    borderRadius: 10,
  },
  plusIcon: {
    width: 42,
    height: 42,
    tintColor: '#8F9BB3',
  },
  plusIconBtn: {
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
  }
})