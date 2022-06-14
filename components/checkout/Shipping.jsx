import styles from './checkout.module.css';

export default function Shipping({ register, errors }) {
  return (
    <div>
      <h2>Shipping Information</h2>

      <div className={styles.formInput}>
        <label htmlFor="deliveryAddress">Address</label>
        <input
          name="deliveryAddress"
          placeholder="Delivery Address"
          {...register('deliveryAddress', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 50,
            minLength: 2,
          })}
        />
        {errors.deliveryAddress && <span>Please enter a valid Address</span>}
      </div>

      <div className={styles.formInput}>
        <label htmlFor="city">City</label>
        <input
          name="city"
          placeholder="City"
          {...register('city', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 232,
            minLength: 2,
          })}
        />
        {errors.city && <span>Please enter a valid city</span>}
      </div>
      <div className={styles.formInput}>
        <label htmlFor="state">State</label>
        <input
          name="state"
          placeholder="State"
          {...register('state', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 22,
            minLength: 2,
          })}
        />
        {errors.state && <span>Please enter a valid state</span>}
      </div>
      <div className={styles.formInput}>
        <label htmlFor="zip">Zip</label>
        <input
          name="zip"
          placeholder="	32225-1234 or 32225 or 322251234"
          {...register('zip', {
            required: true,
            pattern: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/i,
            maxLength: 9,
            minLength: 5,
          })}
        />
        {errors.zip && <span>Please enter a valid zip</span>}
      </div>
    </div>
  );
}
