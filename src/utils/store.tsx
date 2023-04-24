import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {UserSlice} from '@utils/UserSlice';

const reducers = combineReducers({
    UserSlice: UserSlice.reducer
});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['UserSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;
