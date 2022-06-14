import { useState } from 'react';
import styles from './checkout.module.css';

export default function Payment({ register, errors }) {
  const [isSame, setSame] = useState(false);

  function sameAsShipping() {
    if (isSame) {
      setSame(false);
    } else {
      setSame(true);
    }
  }

  return (
    <div>
      <div className={styles.billingWrap}>
        <h2>Billing Address</h2>
        <input
          type="checkbox"
          name="Same as shipping?"
          onClick={() => sameAsShipping()}
        />
        {!isSame ? (
          <div>
            <div className={styles.formInput}>
              <label htmlFor="billingAddress">Address</label>
              <input
                name="billingAddress"
                placeholder="Billing Address"
                {...register('billingAddress', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 50,
                  minLength: 2,
                })}
              />
              {errors.billingAddress && (
                <span>Please enter a valid Address</span>
              )}
            </div>

            <div className={styles.formInput}>
              <label htmlFor="billingCity">City</label>
              <input
                name="billingCity"
                placeholder="City"
                {...register('billingCity', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 32,
                  minLength: 2,
                })}
              />
              {errors.billingCity && <span>Please enter a valid City</span>}
            </div>
            <div className={styles.formInput}>
              <label htmlFor="state">State</label>
              <input
                name="billingState"
                placeholder="State"
                {...register('billingState', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 22,
                  minLength: 2,
                })}
              />
              {errors.billingState && <span>Please enter a valid state</span>}
            </div>
            <div className={styles.formInput}>
              <label htmlFor="zip">Zip</label>
              <input
                name="billingZip"
                placeholder="	32225-1234 or 32225 or 322251234"
                {...register('billingZip', {
                  required: true,
                  pattern: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/i,
                  maxLength: 9,
                  minLength: 5,
                })}
              />
              {errors.billingZip && <span>Please enter a valid zip</span>}
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.paymentWrap}>
        <h2>Payment Method</h2>
        <div>
          <div className={styles.formInput}>
            <label htmlFor="nameOnCard">Name on card</label>
            <input
              name="nameOnCard"
              placeholder="John Doe"
              {...register('nameOnCard', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
                maxLength: 22,
                minLength: 2,
              })}
            />
            {errors.nameOnCard && <span>Please enter a valid name</span>}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              name="cardNumber"
              placeholder="Card # here"
              {...register('cardNumber', {
                required: true,
                pattern:
                  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i,
                maxLength: 32,
                minLength: 10,
              })}
            />
            {errors.cardNumber && <span>Please enter a valid card number</span>}
          </div>
          <div>
            <div className={styles.formInput}>
              <label htmlFor="cardExpDate">Card Experation Date</label>
              <input
                name="cardExpDate"
                placeholder="mm/yy"
                {...register('cardExpDate', {
                  required: true,
                  pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                  maxLength: 5,
                  minLength: 5,
                })}
              />
              {errors.cardExpDate && <span>Please enter a valid date</span>}
            </div>
            <div className={styles.formInput}>
              <label htmlFor="cardCvv">Card CVV Number</label>
              <input
                name="cardCvv"
                placeholder="123"
                {...register('cardCvv', {
                  required: true,
                  pattern: /^[0-9]{3,4}$/,
                  maxLength: 4,
                  minLength: 3,
                })}
              />
              {errors.cardCvv && <span>Please enter a valid CVV</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
