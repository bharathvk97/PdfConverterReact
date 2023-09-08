import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../Reducer/CommonReducer";
import Uploadfilereducer from "../Reducer/UploadFileReducer";

const store=configureStore({
    reducer:{
        user:registerSlice,
        uploadfile: Uploadfilereducer
    }
});

export default store;