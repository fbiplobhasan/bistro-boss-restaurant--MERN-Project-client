import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location ", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // ✅ email verify check
        // TODO: enable this code.

        // if(!result.user.emailVerified){
        //   toast.error("Please verify your email before login.");
        //   return;
        // }
        toast.success("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Please check your inbox.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                ref={emailRef}
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="link link-hover"
                >
                  Forgot password?
                </button>
              </div>
              <div>
                <label>
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="LogIn"
                // TODO:
                disabled={false}
              />
              <div>
                <div className="divider"></div>
                <SocialLogin></SocialLogin>
              </div>
              <div className="divider"></div>
            </form>
            <p className="p-6">
              <small>
                New Here? <Link to="/signup">Create an account</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
