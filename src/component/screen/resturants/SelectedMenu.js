import React, { useState } from 'react'
import image from "../../../asset/1.jpg"
import { Button, Input } from 'antd';
import { adjustMenuQTY, removeFromMenu } from '../../state/actionState';
import { connect } from 'react-redux';

const SelectedMenu = ({q, chng, remove}) => {
  const [myQTY, setMyQTY] = useState(q.qty)
  return (
    <div>
    <div
    style={{
      width:"300px",
      backgroundColor:"white",
      paddingBottom:"40px",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
      margin: "20px",
      borderRadius:"10px"

    }}
    >
      <img
        src={q.image}
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
        <div>{q.title}</div>
        <div>{q.price}</div>
      </div>

        <div
        style={{
          width:"100%",
          justifyContent:"center",
          display:"flex",
          marginTop:"20px", 
        }}
        >
          <Input
          min="1"
            type="number"
            value={myQTY}
            style={{
              width:"100px",
              marginRight:"20px",             
            }}
            onChange={(e) => {
              setMyQTY(e.target.value)
              chng(q.id, e.target.value)
            }}
            />

        <Button
        type="primary"
        danger
        onClick={()=>{
          remove(q.id)
        }}
        >Remove</Button>
        </div>
    </div>
  </div>
  )
}

const mapDispatch = dispatch => {
  return{
    chng: (id, value) => {
      dispatch(adjustMenuQTY(id, value))
    },
    remove: (id) =>{
      dispatch(removeFromMenu(id))
    }
  }
}

export default connect(null, mapDispatch) (SelectedMenu)
