import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
import { createImageUrlBuilder } from "next-sanity";
  
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
    </div>
  );
};