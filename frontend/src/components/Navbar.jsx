// import { useAuth } from "../auth/AuthContext"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"

// const Navbar = () => {
//   const { isAuthenticated, logout } = useAuth()
//   const navigate = useNavigate()

//   const [search, setSearch] = useState("")

//   const handleLogout = () => {
//     logout()
//     navigate("/")
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     navigate(`/customer/dashboard?search=${search}`)
//   }

//   return (
//     <div style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>

//       {/* Search Bar */}
//       <form onSubmit={handleSearch} style={{ display: "inline-block", marginRight: "30px" }}>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Right Side Buttons */}
//       {!isAuthenticated ? (
//         <>
//           <button onClick={() => navigate("/register")}>Signup</button>
//           <button onClick={() => navigate("/login")}>Login</button>
//         </>
//       ) : (
//         <>
//           <button onClick={() => navigate("/customer/orders")}>Orders</button>
//           <button onClick={() => navigate("/customer/wishlist")}>Wishlist</button>
//           <button onClick={() => navigate("/customer/appointments")}>Appointments</button>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       )}
//     </div>
//   )
// }

// export default Navbar

import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/customer/dashboard?search=${search}`);
  };

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand / profile */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <span className="h-8 w-8 rounded-lg bg-emerald-500/90 shadow-sm shadow-emerald-300/70" />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-900">
              Vaagai
            </span>
          </button>
          {isAuthenticated && (
            <button
              type="button"
              onClick={() => navigate("/customer/profile")}
              className="hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 md:inline-flex"
            >
              {user?.email || "Profile"}
            </button>
          )}
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="hidden flex-1 items-center justify-center px-4 md:flex"
        >
          <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="hidden rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-600 md:inline-flex"
            >
              Search
            </button>
          </div>
        </form>

        {/* Right side actions */}
        <nav className="flex items-center gap-2">
          {!isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-600"
              >
                Signup
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => navigate("/customer/dashboard")}
                className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => navigate("/customer/orders")}
                className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 md:inline-flex"
              >
                Orders
              </button>
              <button
                type="button"
                onClick={() => navigate("/customer/wishlist")}
                className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 lg:inline-flex"
              >
                Wishlist
              </button>
              <button
                type="button"
                onClick={() => navigate("/customer/appointments")}
                className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 lg:inline-flex"
              >
                Appointments
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
