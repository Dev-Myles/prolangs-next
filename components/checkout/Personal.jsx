import styles from './checkout.module.css';

export default function Personal({ register, errors }) {
  return (
    <div>
      <h2>Personal Information</h2>
      <div className={styles.nameWrap}>
        <div className={styles.formInput}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            placeholder="First name"
            {...register('firstName', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 32,
              minLength: 2,
            })}
          />
          {errors.firstName && <span>Please enter a valid first name</span>}
        </div>
        <div className={styles.formInput}>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            placeholder="Last name"
            {...register('lastName', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 32,
              minLength: 2,
            })}
          />
          {errors.lastName && <span>Please enter a valid last name</span>}
        </div>
      </div>
      <div className={styles.formInput}>
        <label htmlFor="email">Last Name</label>
        <input
          name="email"
          className={styles.emailInput}
          type="email"
          placeholder="Email@email.com"
          {...register('email', {
            maxLength: 30,
            required: true,
            pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
          })}
        />
        {errors.lastName && <span>Please enter a valid last name</span>}
      </div>
      <div className={styles.formInput}>
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          placeholder="1234567"
          {...register('phone', {
            required: true,
            pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i,
            maxLength: 10,
            minLength: 9,
          })}
        />
        {errors.phone && <span>Please enter a valid phone number</span>}
      </div>
    </div>
  );
}
