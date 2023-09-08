import React, { useState, useEffect } from 'react'
import axios from 'axios'

function TextFileRead() {
  const [text, setText] = useState('')

  let fetchData = async () => {
    const baseurl = process.env.REACT_APP_FILE_READER_URL
    let resp = await axios.get(
      baseurl + '/78ECADAB77845F03DDE240F57663B246.txt',
    )
    let final = await resp.data
    setText(final)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <pre>{text}</pre>
}
export default TextFileRead
