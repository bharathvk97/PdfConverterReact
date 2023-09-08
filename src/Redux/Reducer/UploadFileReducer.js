import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  msg: '',
  uploadedfile: '',
  loading: false,
  error: '',
}

const Uploadfilereducer = createSlice({
  name: 'uploadfile',
  initialState,
  reducer: {
    addFile: (state, action) => {
      state.uploadedfile = localStorage.getItem('uploadedfile')
    },
  },
})

export const { addFile } = Uploadfilereducer.actions
export default Uploadfilereducer.reducer
