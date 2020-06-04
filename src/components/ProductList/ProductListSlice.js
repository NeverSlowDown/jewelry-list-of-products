import { createSlice } from '@reduxjs/toolkit';

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
    toggleLoading: state => {
      state.loading = !state.loading
    },
    productsAll: (state, {payload}) => {
      state.all = payload
    },
    productsFavorites: (state, {payload}) => {
      state.favorites = payload
    },
    productsBracelets: (state, {payload}) => {
      state.bracelets = payload
    },
    productsNecklaces: (state, {payload}) => {
      state.necklaces = payload
    },
    productsEarrings: (state, {payload}) => {
      state.earrings = payload
    },
    productsEngagement: (state, {payload}) => {
      state.engagement = payload
    },
    productsPendants: (state, {payload}) => {
      state.pendants = payload
    },
    productsRings: (state, {payload}) => {
      state.rings = payload
    },
    productsStakingSets: (state, {payload}) => {
      state.stakingSets = payload
    },    
  },
});

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
} = productList.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getProductsAll = async dispatch => {
  // http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json
  const result = {
    name: 'producto de ALL'
  }
  dispatch(toggleLoading)
  await dispatch(productsAll(result));
  dispatch(toggleLoading)
};

export const getProductsFavorites = async dispatch => {
  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsBracelets = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/bracelets.json

  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsNecklaces = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/necklaces.json

  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsEarrings = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/earrings.json
  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsEngagement = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/engagement.json

  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsPendants = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/pendants.json

  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsRings = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/rings.json

  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};
export const getProductsStakingSets = async dispatch => {
// http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/stacking-sets.json

  dispatch(toggleLoading)
  await dispatch(productsAll);
  dispatch(toggleLoading)
};


















export const allProducts = state => state.products.all;
export const favoritesProducts = state => state.products.favorites;
export const braceletsProducts = state => state.products.bracelets;
export const necklacesProducts = state => state.products.necklaces;
export const earringsProducts = state => state.products.earrings;
export const engagementProducts = state => state.products.engagement;
export const pendantsProducts = state => state.products.pendants;
export const ringsProducts = state => state.products.rings;
export const stakingsetsProducts = state => state.products.stakingSets;

export default productList.reducer;
