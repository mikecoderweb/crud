// store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { UserCrud } from '../slice/user/index.js';

export const store = configureStore({
    reducer: {
        [UserCrud.reducerPath]: UserCrud.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            UserCrud.middleware,
        ),
});

setupListeners(store.dispatch);