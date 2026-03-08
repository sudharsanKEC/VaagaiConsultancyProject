// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

// const AdminLayout = ({ children }) => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <div>
//       {/* Top Navbar */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "15px 30px",
//           borderBottom: "1px solid #ccc",
//         }}
//       >
//         <h3>Welcome, Vaagai Admin</h3>
//         <button onClick={() => navigate("/admin/orders")}>Orders</button>
//         <button onClick={handleLogout}>Logout</button>
//       </div>

//       {/* Main Content */}
//       <div style={{ padding: "30px" }}>{children}</div>
//     </div>
//   );
// };

// export default AdminLayout;
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-emerald-500/90 shadow-sm shadow-emerald-300/70" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-900">
                Vaagai
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                Admin Panel
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-2 text-xs font-medium">
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50"
            >
              Inventory
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/orders")}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50"
            >
              Orders
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/appointments")}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50"
            >
              Appointments
            </button>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700 hover:bg-red-100"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
