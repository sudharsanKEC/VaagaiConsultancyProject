const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
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

          {/* Actions */}
          <nav className="flex items-center gap-2 md:gap-3">
            <a
              href="#products"
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-emerald-500/60 hover:text-emerald-700 hover:bg-emerald-50 transition-colors md:inline-flex"
            >
              Go to Products
            </a>
            <a
              href="/login"
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Login
            </a>
            <a
              href="/register"
              className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
            >
              Signup
            </a>
          </nav>
        </div>
      </header>

      <main className="flex min-h-screen flex-col bg-white">
        {/* Hero Section with Background Image */}
        <section className="relative pt-20 pb-16 lg:pb-24">
          <div className="absolute inset-0">
            <img
              src="/images/Landing.jpg"
              alt="Modern home with premium windows and doors"
              className="h-full w-full object-cover"
            />
            {/* Light gradient so the page still feels bright */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/70 to-white" />
          </div>

          {/* Content over the image */}
          <div className="relative z-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-8 lg:flex-row lg:items-center lg:gap-14 lg:pt-12">
              <div className="flex-1 space-y-5 md:space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm">
                  Premium UPVC &amp; PVC Solutions
                </p>
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Premium UPVC Windows &amp; Doors{" "}
                  <span className="block text-emerald-600">
                    for Modern Homes
                  </span>
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-slate-700 md:text-base">
                  Strong, durable and elegant solutions for your home and
                  business. From UPVC windows to WPC and PVC doors, Vaagai
                  brings you quiet, secure and weather-ready spaces with a
                  classic, timeless finish.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1 md:gap-4">
                  <a
                    href="http://localhost:5173/customer/dashboard"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
                  >
                    Explore Products
                    <span className="text-lg leading-none">↗</span>
                  </a>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 md:text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      5+ Years of Craftsmanship
                    </span>
                    <span className="hidden md:inline text-slate-600">
                      Noise reduction • Weather proof • Low maintenance
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="mx-auto grid max-w-md gap-4 text-xs text-slate-800 sm:grid-cols-2 sm:text-sm">
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                      Windows
                    </p>
                    <p className="mt-2 font-medium text-slate-900">
                      UPVC Windows
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Thermal and sound insulation with sleek sight-lines.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                      Doors
                    </p>
                    <p className="mt-2 font-medium text-slate-900">
                      PVC &amp; WPC Doors
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Moisture-resistant, termite-proof and easy to maintain.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                      Colored Glass
                    </p>
                    <p className="mt-2 font-medium text-slate-900">
                      Facades &amp; Interiors
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Elegant tints that elevate the look of any space.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Sliding
                    </p>
                    <p className="mt-2 font-medium text-slate-900">
                      Sliding Windows
                    </p>
                    <p className="mt-1 text-xs text-slate-700">
                      Smooth gliding, space-saving designs for balconies and
                      living areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White background content starts here */}
        <section className="bg-white py-16 text-slate-900 md:py-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6">
            {/* Achievements */}
            <div className="space-y-8">
              <div className="space-y-3 text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  With Achievements Count
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Built on trust, precision and craftsmanship.
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-slate-600 md:mx-0 md:text-base">
                  Vaagai has helped homeowners and businesses upgrade to secure,
                  elegant and efficient window and door systems across the
                  region.
                </p>
              </div>

              <div className="stats-grid grid gap-6 md:grid-cols-3 lg:grid-cols-5">
                <div className="stat-item rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-emerald-600 md:text-3xl">
                    1500+
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Premium Windows Installed
                  </p>
                </div>
                <div className="stat-item rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-emerald-600 md:text-3xl">
                    800+
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Durable Doors Delivered
                  </p>
                </div>
                <div className="stat-item rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-emerald-600 md:text-3xl">
                    300+
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Satisfied Homeowners
                  </p>
                </div>
                <div className="stat-item rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-emerald-600 md:text-3xl">
                    120+
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Trusted Business Clients
                  </p>
                </div>
                <div className="stat-item rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-emerald-600 md:text-3xl">
                    5+
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Years of Craftsmanship
                  </p>
                </div>
              </div>
            </div>

            {/* Product Showcase Section */}
            <section id="products" className="space-y-8">
              <div className="space-y-3 text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Our Product Range
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Windows and doors that match your vision.
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-slate-600 md:mx-0 md:text-base">
                  Discover perfectly engineered UPVC and PVC solutions for
                  modern apartments, villas, offices and commercial spaces.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900">
                    UPVC Windows
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Energy-efficient profiles with tight sealing that keep out
                    heat, dust and noise, while letting in abundant natural
                    light.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-500">
                    <li>• Casement and sliding configurations</li>
                    <li>• Multi-chamber insulation design</li>
                    <li>• Ideal for bedrooms, living rooms and balconies</li>
                  </ul>
                </div>

                <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900">
                    PVC Doors
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Lightweight and moisture-resistant doors, perfect for
                    bathrooms, kitchens and utility areas with frequent usage.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-500">
                    <li>• Termite and rust proof</li>
                    <li>• Easy to clean and maintain</li>
                    <li>• Multiple color and panel options</li>
                  </ul>
                </div>

                <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Colored Glass
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Stylish tinted and frosted glass solutions for windows,
                    doors, partitions and facades that need a design statement.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-500">
                    <li>• Privacy with natural light</li>
                    <li>• UV and glare control options</li>
                    <li>• Ideal for façades and interiors</li>
                  </ul>
                </div>

                <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900">
                    WPC Doors
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Wood polymer composite doors that combine the warmth of wood
                    with the strength and stability of modern materials.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-500">
                    <li>• Warp and crack resistant</li>
                    <li>• Suitable for interior and exterior use</li>
                    <li>• Premium textures and finishes</li>
                  </ul>
                </div>

                <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Sliding Windows
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Smooth sliding systems that save space and open up wide
                    views to balconies, sit-outs and gardens.
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-500">
                    <li>• Silent rollers and secure locks</li>
                    <li>• Ideal for compact spaces</li>
                    <li>• Compatible with mosquito mesh options</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
