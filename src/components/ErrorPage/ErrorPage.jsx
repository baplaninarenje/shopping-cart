import { Link, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className={styles.errorPage}>
      <div className={styles.errorText}>
        <h2>
          {error?.message ||
            error?.data ||
            'Something went wrong. Please try again later.'}
        </h2>
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

export default ErrorPage;
