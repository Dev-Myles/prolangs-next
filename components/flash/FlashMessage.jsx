import { GrClose } from 'react-icons/gr';
import styles from './flashmessage.module.css';

export default function FlashMessage(props) {
  const color = {
    backgroundColor: props.status == 200 ? 'var(--success)' : 'var(--error)',
    color: props.status == 200 ? 'var(--success-text)' : 'var(--error-text)',
  };

  function deleteFlash() {
    props.onClick();
  }

  return (
    <div className={styles.flashMessage} style={color}>
      <span>
        {props.message}{' '}
        <button className={styles.xButton} onClick={deleteFlash}>
          <GrClose />
        </button>
      </span>
    </div>
  );
}
