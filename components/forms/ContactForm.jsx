import { useForm } from 'react-hook-form';
import styles from './contactform.module.css';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.formWrap}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="First name"
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 22,
          })}
        />
        {errors.name && <span>Please enter a valid first name</span>}
        <input
          className={styles.textInput}
          type="text"
          placeholder="Last name"
          {...register('lastname', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 22,
          })}
        />
        {errors.lastname && <span>Please enter a valid last name</span>}
        <input
          className={styles.emailInput}
          type="email"
          placeholder="Email@email.com"
          {...register('email', {
            maxLength: 30,
            required: true,
            pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
          })}
        />
        {errors.email && (
          <span className={styles.errorMessage}>
            Please enter a valid email
          </span>
        )}
        <textarea
          className={styles.messageInput}
          type="text"
          {...register('message', { required: true, maxLength: 1000 })}
        />
        {errors.message && <span>Please enter a valid message</span>}
        <input type="submit" />
      </form>
    </div>
  );
}
