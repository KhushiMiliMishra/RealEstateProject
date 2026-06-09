export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] flex">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-[#1D3557] text-white flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-6">
          PropVault Portal
        </h1>

        <p className="text-lg text-slate-200 leading-relaxed">
          Manage properties, inquiries, approvals, analytics,
          and client relationships from one professional platform.
        </p>

        <div className="mt-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#2A9D8F]" />
            <span>Property Management</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#2A9D8F]" />
            <span>Lead Tracking</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#2A9D8F]" />
            <span>Performance Analytics</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#222222] mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Sign in to continue
          </p>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Login As
            </label>

            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none">
              <option>Agent</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Remember Me
            </label>

            <button className="text-[#1D3557] text-sm font-medium">
              Forgot Password?
            </button>
          </div>

          <button className="w-full bg-[#1D3557] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}