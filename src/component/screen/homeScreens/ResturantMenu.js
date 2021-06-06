import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import image from "../../../asset/1.jpg"
import { Button } from 'antd';
import { addToMenu, singleMenu } from '../../state/actionState';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ResturantMenu = ({r, add, view}) => {

  const getMenu = async () => {
   


  }

  useEffect(()=>{
    getMenu()
  }, [])

  return (
    <div>
      <div
      style={{
        width:"300px",
        backgroundColor:"white",
        paddingBottom:"20px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
        margin: "20px",
        borderRadius:"10px",
        marginTop:"100px"


      }}
      >
        <img
          src={r.image}
          style={{
            width:"300px",
            height:"250px",
            objectFit:"cover",
            borderRadius:"10px 10px 0 0",
            marginBottom:"10px"
          }}
        />

        <div
        style={{
          margin: "0 20px"
        }}
        >
          <div>{r.title}</div>
          <div>{r.price}</div>
        </div>

          <div
          style={{
            width:"93%",
            justifyContent:"space-between",
            display:"flex",
            margin:"0 10px",
            marginTop:"10px"
          }}
          >

         <Link
         to={`/menu/${r.id}`}
         >
         <Button
          type="primary"
         
          onClick={()=>{
            view(r)
          }}
          >View Content</Button>
         </Link>


          <Button
          type="primary"
          danger
          onClick={()=>{
            add(r.id)
          }}
          >Add to Menu</Button>
          </div>
      </div>
    </div>
  )
}


const mapDispatch = dispatch => {
  return{
    add: (id) => {
      dispatch(addToMenu(id))
    },
    view: (item) =>{
      dispatch(singleMenu(item))
    }
  }
}

export default connect(null, mapDispatch) (ResturantMenu)
