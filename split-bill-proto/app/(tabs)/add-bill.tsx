import React from 'react'
import { useState, useMemo }  from 'react'
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  View 
} from 'react-native'
import { useRouter } from 'expo-router';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import {
  addBillItem,
  delBillItem,
  setBillItem,
} from '../../store/store'

import { 
  Button, 
  Divider,
  Icon, 
  IconElement, 
  IndexPath, 
  Input,
  Layout, 
  Select, 
  SelectItem,
  Text, 
} from '@ui-kitten/components';

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
  const dispatch = useDispatch();
  const bill = useSelector((state: RootState) => state.bill);

  const subtotal = useMemo(() => {

    // TODO: Fix decimal place subtotal
    const s = bill.items.reduce((sum, i) => {
      return (sum + (i.price * i.quantity)).toFixed(2)
    }, 0)
    return s;
  }, [bill.items])



  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));

  const addItem = () => {
    // TODO: Creates new line item in bill with default 1 quantity
    /* 
      1. Should update state to create new object in bill.items that is { name: '', quantity: 1, price: null, shares: [] }
    */
    dispatch(addBillItem());
    console.log(bill);
  }

  const setItem = (type: string, index, value: any) => {

    // TODO: input validation

    if (type === 'quantity') {
      value = value.row + 1;
    }

    dispatch(setBillItem({ type, index, value }))
  }

  const deleteItem = (index: number) => {
    console.log('Delete btn pressed')
    console.log(index);
    dispatch(delBillItem(index));
  }

  const routeGuard = () => {

    // TODO: add route guards
    /* 
      1. Are there any items in our state at all?
      2. Does the item have a name, quanitity, and price?
      3. Is the tax and tip selected?
    
    */

    // TODO: If screen valid and complete, tell bottom nav to update
    router.push('/add-diners')
  }

  const inputValidation = () => {

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
          <Text category='h1'>Bill</Text>
        </Layout>

        <Layout 
        style={styles.billContainer}
        level='2'
        >
          {bill.items.map((item, index) => (
            <Layout 
            style={styles.itemContainer}
            level='2'>
            <Input
              style={styles.itemInputDish}
              value={item.name}
              placeholder='Affogato'
              onChangeText={ (value) => setItem('name', index, value) }
            />
            <Select
              style={styles.itemInputQty}
              selectedIndex={new IndexPath(item.quantity)}
              onSelect={ (value) => setItem('quantity', index, value)}
              value={item.quantity}
            >
              <SelectItem title='1' />
              <SelectItem title='2' />
              <SelectItem title='3' />
              <SelectItem title='4' />
              <SelectItem title='5' />
            </Select>
            <Input
              style={styles.itemInputPrice}
              value={item.price}
              placeholder='$'
              onChangeText={(value) => setItem('price', index, value)}
            />
            <Button
              appearance='ghost'
              size='small'
              accessoryLeft={DeleteIcon}
              style={styles.deleteIconBtn}
              onPress={ () => deleteItem(index) }
            />
          </Layout>
            
          ))}

          <Layout
            style={styles.extrasContainer}
            level='2'
          >
            <Text> Tax </Text>

            <Layout
              style={styles.extrasInputContainer}
              level='2'
            >
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
          </Layout>

          <Layout
            style={styles.extrasContainer}
            level='2'
          >
            <Text> Tip </Text>


            <Layout
              style={styles.extrasInputContainer}
              level='2'
            >
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
          </Layout>

          <Divider/>

          <Button
            appearance='ghost'
            size='giant'
            accessoryLeft={PlusIcon}
            style={styles.plusIconBtn}
            onPress={addItem}
          />


          <Layout
            style={styles.summaryContainer}
            level='2'
          >
            <Divider />         

            <Layout 
              style={styles.sumTextContainer}
              level='2'
            >
              <Text>Subtotal </Text>
              <Text>$ { subtotal }</Text>
            </Layout>

            <Layout
              style={styles.sumTextContainer}
              level='2'
            >
              <Text>Tax </Text>
              <Text>$ { subtotal }</Text>
            </Layout>

            <Layout
              style={styles.sumTextContainer}
              level='2'
            >
              <Text>Tip </Text>
              <Text>$ { subtotal }</Text>
            </Layout>

            <Divider/>
            <Layout 
              style={styles.sumTextContainer}
              level='2'
            >
              <Text category='h6'>Total </Text>
            </Layout>
          </Layout>

        </Layout>

        {/* //TODO: Fix summary container styles */}

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
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  billContainer: {
    // flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
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
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    width: '100%',
  },
  sumTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  extrasContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 8,
    marginBottom: 10,
  },
  extrasInputContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // width: '100%'
  },
  extrasInput: {
    // flex: 6,
    width: '50%',
    marginRight: 10,
  },
  extrasType: {
    // flex: 2,
    width: '30%',
    // marginRight: 10,
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
  }
})