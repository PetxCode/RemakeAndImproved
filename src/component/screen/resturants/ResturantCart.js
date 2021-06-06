import { Button } from 'antd'
import { relativeTimeRounding } from 'moment'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Payment from '../payment/Payment'
import SelectedMenu from './SelectedMenu'

const ResturantCart = ({get}) => {

const [totalCost, setTotalCost] = useState(0)
const [totalQTY, setTotalQTY] = useState(0)

useEffect(()=>{
  let newPrice = 0
  let newQty = 0

  get.forEach(el => (
    newPrice += el.price * el.qty,
    newQty += el.qty
  ))
  
setTotalCost(newPrice)
setTotalQTY(newQty)

}, [get, setTotalCost, setTotalQTY, totalCost, totalQTY])

  return (
    <div
    style={{
      display:"flex",
      justifyContent:"space-between",
    

    }}
    >
      <div
       style={{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"100px"
  
      }}
      >

        <div
        style={{
          position:"fixed",
          
        }}
        >
        <div
         style={{
           marginLeft:"10px",
          //  position:"fixed"
         }}
         >
           <div>Summary</div>
                 <br/>
           <div>Total Selected Items: {totalQTY}</div>
           <br/>
           <div>Toatal Cost: {Math.ceil(totalCost)}</div>
           <br/>
           <br/>
           {/* <Button
           type="primary"
           danger
           >Proceed to Payment</Button> */}

             <Payment total={totalCost}/>
         </div>
       
        </div>


      <div
       style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        margin: "20px 30px",
        marginLeft:"200px"
      }}
      >
      {
        get.map(r => (
          <SelectedMenu key={r.id} q={r} />
        ))
      }
      
      </div>
      </div>
     
    </div>
  )
}

const mapState = state => {
  return{
    get: state.rest.menuData
  }
}

export default connect(mapState) (ResturantCart)
