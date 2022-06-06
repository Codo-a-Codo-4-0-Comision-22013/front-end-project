import { languages } from '../../language';
import { app } from '../../firebase/firebase';
import { getAuth, signInWithPopup, linkWithPopup } from "firebase/auth";
import { SOCIAL_CONFIG } from '../../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";

function SocialLogin(props) {
    const _language = languages['en'];
    const { dark } = props;
    const style =   dark ? "bg-dark text-white":"bg-light text-dark";
    const socialConfig = SOCIAL_CONFIG;

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const socialLogin = (provider) => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className={style}>
            <div className="login-header">
                <div className="login-header-logo">
                    {(socialConfig.google)?
                        <button className="btn btn-social btn-google" onClick={() => socialLogin(googleProvider)}>
                            <FontAwesomeIcon icon={solid('user')}/> Sign in with Google
                        </button>
                        :<> </>}
                </div>
            </div>
        </div>
    );
}

export default SocialLogin;