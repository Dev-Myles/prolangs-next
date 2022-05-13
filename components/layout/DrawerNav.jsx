import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import { BsBag, BsInstagram } from 'react-icons/bs';
import { FaScroll } from 'react-icons/fa';
import styles from './drawernav.module.css';

export default function DrawerNav(props) {
  function navChange() {
    props.onClick();
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  return (
    <div className={styles.drawerBody}>
      <div className={styles.closeDrawerbtn} onClick={navChange}>
        <Image
          src="/icons/RBG-logo.svg"
          alt="RBG logo"
          layout="fixed"
          width={70}
          height={70}
        />
        <IconContext.Provider value={{ size: '1em' }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </div>
      <div onClick={navChange}>
        <Link href="/store">
          <a>
            Store <BsBag />
          </a>
        </Link>
      </div>
      <div onClick={navChange}>
        <Link href="/cart">
          <a>
            Cart <AiOutlineShoppingCart />
          </a>
        </Link>
      </div>
      <div onClick={navChange}>
        <Link href="https://www.instagram.com/rock_bottom_guild/">
          <a>
            Instagram <BsInstagram />
          </a>
        </Link>
      </div>
      <div onClick={navChange}>
        <Link href="/contact">
          <a>
            Contact
            <BiMessageRoundedEdit />
          </a>
        </Link>
      </div>
      <div onClick={navChange}>
        <Link href="/policy">
          <a>
            Policy <FaScroll />
          </a>
        </Link>
      </div>
    </div>
  );
}
