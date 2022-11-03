import classes from './Header.module.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className={classes["Header"]}>
      <div>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>

        <h1> What do you think? </h1>
      </div>

      <div className={classes["Buttons"]}>
        <button>
          Sign in
        </button>
        <button>
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;