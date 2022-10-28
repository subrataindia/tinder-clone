import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userDob: null,
  userGender: null,
  interestGender: null,
  userUniversity: null,
  userOrientation: [],
  userInterest: null,
  userLocation: null,
  userImages: null,
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
      state.userOrientation = action.payload;
    },
    saveUserInterest: (state, action) => {
      state.userInterest = action.payload;
    },
    saveUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    saveUserImages: (state, action) => {
      state.userImages = action.payload;
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
  saveUserLocation,
  saveUserOrientation,
} = userSlice.actions;

export default userSlice.reducer;
