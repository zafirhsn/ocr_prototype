import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'
import ActionTypes from '@/actions/types'
import generateRandomHexColor from '@/utils/random-color'

export interface BillState {
  bill: BillObject,
  diners: Array<Object>,
  screens: Object
}

interface BillObject {
  items: Array<Object>,
  tax: Object,
  tip: Object,
}

export const initialState: BillState = {
  bill : {
    items: [ { name: '', quantity: 1, price: 0 } ],
    tax: {},
    tip: {},
  },
  diners: [ { name: '', color: generateRandomHexColor() } ],
  screens: {
    isBillReady: false,
    isDinerReady: false,
    isItemsReady: false,
  }
}

const billSlice = createSlice({
  name: 'bill',
  initialState: initialState.bill,
  reducers: {
    addBillItem(state) {
      state.items.push({ name: '', quantity: 1, price: 0 })
    },
    delBillItem(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1)
    },
    setBillItem(state, action: PayloadAction<Object>) {
      state.items[action.payload.index][action.payload.type] = action.payload.value
    }
  }
})

const dinerSlice = createSlice({
  name: 'diners',
  initialState: initialState.diners,
  reducers: {
    addDinerItem(state) {
      state.push({ name: '', color: generateRandomHexColor() })
    },
    delDinerItem(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1)
    },
    setDinerItem(state, action: PayloadAction<Object>) {

    },
    setDinerColor(state, action: PayloadAction<Object>) {
      state[action.payload.index].color = action.payload.color
    }
  }
})

const screensSlice = createSlice({
  name: 'screens',
  initialState: initialState.screens,
  reducers: {}
})


export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    bill: billSlice.reducer,
    diners: dinerSlice.reducer,
    screens: screensSlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addBillItem, delBillItem, setBillItem } = billSlice.actions;
export const { addDinerItem, delDinerItem, setDinerItem, setDinerColor } = dinerSlice.actions;