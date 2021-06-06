import React from 'react'
import image from "../../../asset/1.jpg"
import { Button } from 'antd';
import { connect } from 'react-redux';
import { addToMenu } from '../../state/actionState';

const SingleMenu = ({single, add}) => {
  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      flexWrap:"wrap"
    }}
    >
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
          src={single.image}
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
          <div>{single.title}</div>
          <div>{single.price}</div>
        </div>

          <div
          style={{
            width:"100%",
            justifyContent:"center",
            display:"flex"
          }}
          >
          <Button
          type="primary"
          danger
          onClick={() => {
            add(single.id)
          }}
          >Add to Cart</Button>
          </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return{
    single: state.rest.justEnter,
  }
} 

const mapDispatch = dispatch => {
  return{
    add: (id) => {
      dispatch(addToMenu(id))
    }
  }
}




export default connect(mapState, mapDispatch) (SingleMenu)
