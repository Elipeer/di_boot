import React,{useState,useEffect,useContext} from 'react'
import Output from './Output'
import {UserContext} from '../UserContext'
const Readfile = () => {
const {file,setFile} = useContext(UserContext)

const changeHandler = (e) => {
  e.preventDefault()
  const reader = new FileReader()
  reader.onload = async (e) => {
    const text = (e.target.result)
    setFile(text)

  };
  reader.readAsText(e.target.files[0])
	}



  return(
    <>
      <div>
           <input type="file" name="file" onChange={changeHandler} />
      </div>
    </>
  )

}

export default Readfile
