import {createSlice} from '@reduxjs/toolkit';
import {userDetailsDataType} from '../Types/Type';

const initialState: userDetailsDataType = {
  userName: '',
  userDob: '',
  userGender: '',
  interestGender: '',
  userUniversity: '',
  userOrientation: [],
  userInterest: [],
  userLatitude: 0,
  userLongitude: 0,
  userImages: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
    saveBirthDate: (state, action) => {
      state.userDob = action.payload;
    },
    saveUserGender: (state, action) => {
      state.userGender = action.payload;
    },
    saveInterestGender: (state, action) => {
      state.interestGender = action.payload;
    },
    saveUniversity: (state, action) => {
      state.userUniversity = action.payload;
    },
    saveUserOrientation: (state, action) => {
      state.userOrientation = [...state.userOrientation, action.payload];
    },
    saveUserInterest: (state, action) => {
      state.userInterest = [...state.userInterest, action.payload];
    },
    saveUserLatitude: (state, action) => {
      state.userLatitude = action.payload;
    },
    saveUserLongitude: (state, action) => {
      state.userLongitude = action.payload;
    },
    saveUserImages: (state, action) => {
      state.userImages = [...state.userImages, action.payload];
    },
  },
});

export const {
  saveUserName,
  saveBirthDate,
  saveInterestGender,
  saveUniversity,
  saveUserGender,
  saveUserImages,
  saveUserInterest,
  saveUserLatitude,
  saveUserLongitude,
  saveUserOrientation,
} = userSlice.actions;

export default userSlice.reducer;
