import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuth } from "../../auth/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (email.trim() === "" || password.trim() === "") {
      setIsError(true);
      setMessage("Email and Password are required.");
      return;
    }

    try {
      const response = await api.post("/token/", {
        email,
        password,
      });

      const accessToken = response.data.access;

      // Decode JWT
      const payload = JSON.parse(atob(accessToken.split(".")[1]));

      // Check role
      if (payload.user_type !== "customer") {
        setIsError(true);
        setMessage("Admin accounts must login from admin portal.");
        return;
      }

      login({
        user: { email: payload.email, userType: payload.user_type },
        token: accessToken,
      });

      navigate("/customer/dashboard");
    } catch (err) {
      setIsError(true);
      setMessage("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden grid md:grid-cols-2">
        {/* Left panel - brand / description */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-b from-white via-emerald-50 to-white px-8 py-10 border-r border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-8 w-8 rounded-lg bg-emerald-500/90 shadow-sm shadow-emerald-300/70" />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold tracking-[0.18em] uppercase text-slate-900">
                  Vaagai
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  UPVC Windows &amp; Doors
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">
              Welcome back, customer.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sign in to manage your window and door orders, track deliveries,
              and access your wishlist of premium UPVC windows, PVC doors,
              colored glass and more.
            </p>
          </div>
          <div className="mt-8 space-y-2 text-xs text-slate-500">
            <p>• Secure customer-only access</p>
            <p>• Fast re-ordering for your favourite designs</p>
            <p>• View past orders and service history</p>
          </div>
        </div>

        {/* Right panel - form */}
        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-1">
            Customer Login
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Use your registered email and password to continue.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-800">
                Email <span className="text-emerald-600">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-800">
                Password <span className="text-emerald-600">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
            >
              Login
            </button>

            {message && (
              <div
                className={`mt-3 rounded-lg px-3 py-2 text-sm font-medium ${
                  isError
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
