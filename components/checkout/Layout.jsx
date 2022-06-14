import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './checkout.module.css';
import Payment from './Payment';
import Personal from './Personal';
import Review from './Review';
import Shipping from './Shipping';

export default function Layout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isStep, setStep] = useState(0);

  function backStep() {
    if (isStep > 0) {
      setStep(isStep - 1);
    } else {
      setStep(0);
    }
  }
  function forwardStep() {
    if (isStep < 3) {
      setStep(isStep + 1);
    } else {
      setStep(3);
    }
  }

  return (
    <div className={styles.formWrap}>
      <form onSubmit={handleSubmit()}>
        <div>
          <button onClick={() => backStep()}>b</button>
          {isStep == 0 ? (
            <Shipping register={register} errors={errors} />
          ) : isStep == 1 ? (
            <Personal register={register} errors={errors} />
          ) : isStep == 2 ? (
            <Payment register={register} errors={errors} />
          ) : (
            <Review />
          )}
          <button onClick={() => forwardStep()}>b</button>
        </div>
        {isStep == 3 ? (
          <input className={styles.button} type="submit" value="Place Order" />
        ) : null}
      </form>
    </div>
  );
}
