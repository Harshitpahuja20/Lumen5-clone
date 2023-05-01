import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const public_key = "pk_test_51MlQmQSBXzcUmOZcCHsvQWXtkgkR5StQYii1WcJemubjFxB7Lk6eqQUYieOioJ13SZQwCVZY9X5YoWNfUdFuUdJz00uYvvv5GZ";

const stripetestPromise = loadStripe(public_key);

const StripeContainer = () => {
  return (
    <Elements stripe={stripetestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
