import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HW2e0I0sU3N3ye3VF4gqQMLRaHQXANsdOQe0MbnIhVUHHLb84K7my3iogxE89XAbYi2WkRxai5vX9YmCxmFEGyo00x5XXVhmB';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful')
  }

  return(
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing LTD'
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;