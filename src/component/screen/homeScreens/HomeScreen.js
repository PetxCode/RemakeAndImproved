import axios from 'axios'
import React, {useEffect} from 'react'
import { connect, useDispatch } from 'react-redux'
import { addContentToMenu } from '../../state/actionState'
import ResturantMenu from './ResturantMenu'

const HomeScreen = ({myMeun}) => {
   const dispatch = useDispatch()


   const getData = async () => {
     const res = await axios.get("https://fakestoreapi.com/products" )
    //  console.log(res)
     if(res){
       dispatch(addContentToMenu(res.data))
     }
   }

   useEffect(()=>{
      getData()
   }, [])
  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      flexWrap:"wrap",
      
    }}
    >
      {
        myMeun.map(el => (
           <ResturantMenu key={el.id} r={el} />
        ))
      }
       
      
    </div>
  )
}


const mapState = state => {
  return{
    myMeun: state.rest.resturantData
  }
}

export default connect(mapState) (HomeScreen)
