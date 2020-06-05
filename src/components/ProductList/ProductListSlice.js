import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productList = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    all: [],
    favorites: [],
    bracelets: [],
    necklaces: [],
    earrings: [],
    engagement: [],
    pendants: [],
    rings: [],
    stakingSets: []
  },
  reducers: {
    toggleLoading: (state, { payload }) => {
      state.loading = payload
    },
    productsAll: (state, { payload }) => {
      state.all = payload
    },
    productsFavorites: (state, { payload }) => {
      // if it is already in favorites it means it needs to be deleted, otherwise add it to the list!
      state.favorites = state.favorites.find(({ id }) => id === payload.id) !== undefined
        ? state.favorites.filter(({ id }) => id !== payload.id)
        : [...state.favorites, payload]
    },
    productsBracelets: (state, { payload }) => {
      state.bracelets = payload
    },
    productsNecklaces: (state, { payload }) => {
      state.necklaces = payload
    },
    productsEarrings: (state, { payload }) => {
      state.earrings = payload
    },
    productsEngagement: (state, { payload }) => {
      state.engagement = payload
    },
    productsPendants: (state, { payload }) => {
      state.pendants = payload
    },
    productsRings: (state, { payload }) => {
      state.rings = payload
    },
    productsStakingSets: (state, { payload }) => {
      state.stakingSets = payload
    }
  }
})

export const {
  productsAll,
  productsFavorites,
  productsBracelets,
  productsNecklaces,
  productsEarrings,
  productsEngagement,
  productsPendants,
  productsRings,
  productsStakingSets,
  toggleLoading
} = productList.actions

const apiDictionary = {
  '/': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json',
    list: productsAll
  },
  '/bracelets': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/bracelets.json',
    list: productsBracelets
  },
  '/necklaces': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/necklaces.json',
    list: productsNecklaces
  },
  '/earrings': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/earrings.json',
    list: productsEarrings
  },
  '/engagement': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/engagement.json',
    list: productsEngagement
  },
  '/pendants': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/pendants.json',
    list: productsPendants
  },
  '/rings': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/rings.json',
    list: productsRings
  },
  '/stakingsets': {
    get: 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/stacking-sets.json',
    list: productsStakingSets
  }
}

export const getProducts = category => async dispatch => {
  try {
    dispatch(toggleLoading(true))
    const res = await axios({
      method: 'get',
      url: apiDictionary[category].get
    })

    const data = res.data

    // let's get only the products of all these categories (in case of category "All" it has more than one category)
    let products = []
    data.map(item => {
      products = [...products, ...item.products]
    })

    const getItems = apiDictionary[category].list

    dispatch(getItems(products))
  } catch (error) {
    console.log(error.response)
    dispatch(toggleLoading(false))
    return error.response
  }
  dispatch(toggleLoading(false))
}

export const allProducts = state => state.products.all
export const favoritesProducts = state => state.products.favorites
export const braceletsProducts = state => state.products.bracelets
export const necklacesProducts = state => state.products.necklaces
export const earringsProducts = state => state.products.earrings
export const engagementProducts = state => state.products.engagement
export const pendantsProducts = state => state.products.pendants
export const ringsProducts = state => state.products.rings
export const stakingsetsProducts = state => state.products.stakingSets
export const isLoading = state => state.products.loading

export default productList.reducer
