import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import FloatingLabelInput from "react-floating-label-paper-input"; 
import { Button, Col } from 'antd';
  


  const PayButton = ({t}) => {
    console.log(t)
  const config = {
    reference: (new Date()).getTime(),
    email: "user@example.com",
    amount: parseInt(Math.ceil(t)*100),
    publicKey: 'pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <Button 
            type="primary"
            danger
            onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Proceed to Payment</Button>
        </div>
      );
  };

  
  function Payment({total}) {

    

    return (
      <div>
        
        <PayButton t={total} />
      </div>
    );
  }
  
  export default Payment;