import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { orderAPI } from '../services/api';

const PaymentForm = ({ orderId, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setMessage('');

    try {
      // Confirm payment
      const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required'
      });

      if (stripeError) {
        setMessage(stripeError.message);
        onError(stripeError.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Update order with payment info
        await orderAPI.processPayment(orderId, {
          paymentMethodId: paymentIntent.payment_method
        });

        onSuccess();
      }
    } catch (err) {
      console.error('Payment error:', err);
      const errorMessage = err.response?.data?.message || 'Payment failed';
      setMessage(errorMessage);
      onError(errorMessage);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <PaymentElement />
      
      {message && <div className="error-message">{message}</div>}

      <button 
        type="submit" 
        className="btn btn-primary btn-block"
        disabled={!stripe || processing}
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>

      <div className="payment-info">
        <p>🔒 Your payment information is secure and encrypted</p>
        <p>💳 For testing, use card number: 4242 4242 4242 4242</p>
        <p>Use any future expiry date and any 3-digit CVC</p>
      </div>
    </form>
  );
};

export default PaymentForm;
