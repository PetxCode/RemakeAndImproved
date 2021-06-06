import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const HeaderView = ({count}) => {
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    let newCounter = 0

    count.forEach(el => {
      newCounter += el.qty
    })
    setCounter(newCounter)

  }, [counter, count])

  return (
    <div>
      <Header
        style={{
          display:'flex',
          position:"fixed",
          width:"100%",
          zIndex:"1",      
        }}
      >
        <Link to="/" > 
          <div
           style={{
           
            fontSize:"20px",
            color:"white",
            fontWeight:"bold"
  
          }}
          
          >Home</div>
        </Link>

        <Link to="/menu" >
        <div
        style={{
          display:'flex',
          marginLeft: "100px",
          fontSize:"20px",
          color:"white",
          fontWeight:"bold"

        }}
        >
          <div>Menu</div>
          <div style={{
           marginLeft:"10px"
 
         }}
          
          >{counter}</div>
        </div>
        </Link>
      </Header>
    </div>
  )
}

const mapState = state => {
  return{
    count: state.rest.menuData
  }
} 

export default connect(mapState) (HeaderView)
