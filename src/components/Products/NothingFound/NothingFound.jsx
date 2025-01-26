import { Link } from 'react-router-dom';
import styles from './../../ErrorPage/ErrorPage.module.css';

const NothingFound = () => {
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorText}>
        <h2>We looked everywhere.</h2>
        <p>
          It looks like this page is missing, or there are no search results.
        </p>
        <Link to="/">Go to the homepage</Link>
      </div>
      <img
        className={styles.errorImg}
        width={203}
        height={243}
        src="http://i.ebayimg.com/00/s/MTUwMFgxMjAw/z/8ScAAOSw-ANlzRIW/$_1.PNG?set_id=2"
        alt="Error"
      />
    </section>
  );
};

export default NothingFound;
