// React hook form use to create this page
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUP = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      // fake delay (simulate API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("✅ Sign Up Successful!");
      reset(); // clear form after success
    } catch (error) {
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left Side Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Create your account and get access to all features. It only takes a
            minute!
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Password must be less than 20 characters",
                      },
                      pattern: {
                        value:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        message:
                          "Password must include uppercase, lowercase, number & special char",
                      },
                    })}
                    className="input input-bordered w-full"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="input input-bordered w-full"
                  placeholder="Re-enter password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept terms & conditions",
                  })}
                  className="checkbox"
                />
                <span>
                  I agree to the{" "}
                  <a href="#" className="link link-primary">
                    Terms & Conditions
                  </a>
                </span>
              </div>
              {errors.terms && (
                <p className="text-red-600 text-sm">{errors.terms.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-neutral w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>

              <div className="text-sm mt-2">
                Already have an account?{" "}
                <a href="/login" className="link link-primary">
                  Login here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
