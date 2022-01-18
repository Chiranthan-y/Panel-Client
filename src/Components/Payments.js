import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

import './checkout.css';

const stripePromise = loadStripe(
  'pk_test_51HRHE1AOoNCmQddTy3VR59id9ldA7MSo9lck7W9qYeeumdAAR3Gv0E49V27yoNZh57VlAS8P0veeIXDINsvArAlz00tpt0kAvH'
);

const id =
  localStorage.getItem('userinfo') === null
    ? ''
    : JSON.parse(localStorage.getItem('userinfo'))._id;
const token =
  localStorage.getItem('token') === null ? '' : localStorage.getItem('token');

const Payments = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch(`/user/${id}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'flat',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payments;
