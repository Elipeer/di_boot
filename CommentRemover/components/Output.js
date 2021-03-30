import Readfile from './Readfile'
import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../UserContext'

function Output () {
  const {file,setFile} = useContext(UserContext)

  return(
  <p>  {file.replace('//','').replace('/*','').replace('*/','')}</p>
  )
}

export default Output
