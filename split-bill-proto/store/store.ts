import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'
import ActionTypes from '@/actions/types'

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
  diners: [ { name: '', color: 'ffffff' } ],
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
    setDinerItem(state, action: PayloadAction<Object>) {
      state.items[action.payload.index][action.payload.type] = action.payload.value
    }
  }
})

const dinerSlice = createSlice({
  name: 'diners',
  initialState: initialState.diners,
  reducers: {
    addDinerItem(state) {
      state.push({ name: '', color: 'ffffff' })
    }
  }
})


export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    bill: billSlice.reducer,
    diners: dinerSlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addBillItem, delBillItem, setDinerItem } = billSlice.actions;
export const { addDinerItem } = dinerSlice.actions;