const benefits = [
  "Done-for-you",
  "Mobile optimized",
  "Hosting included",
  "2 small updates/month",
];

const steps = [
  "Tell us about your business",
  "We build your site",
  "You go live",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 text-zinc-950 sm:pb-0">
      <section className="bg-zinc-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div className="inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wide text-yellow-300">
            FOR AUSTIN SMALL BUSINESSES
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] sm:text-7xl">
              We build your website. You don&apos;t lift a finger.
            </h1>
            <p className="max-w-2xl text-2xl font-bold leading-tight text-zinc-200 sm:text-3xl">
              $0 upfront. $99/month. Cancel anytime.
            </p>
            <p className="text-lg font-bold text-yellow-300 sm:text-xl">
              Most sites are live in 3–5 days.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5120000000"
              className="flex min-h-14 items-center justify-center rounded-md bg-yellow-400 px-7 text-xl font-black text-zinc-950 shadow-lg shadow-black/20 transition hover:bg-yellow-300"
            >
              Call Now
            </a>
            <a
              href="#lead-form"
              className="flex min-h-14 items-center justify-center rounded-md border-2 border-white px-7 text-xl font-black text-white transition hover:bg-white hover:text-zinc-950"
            >
              Get My Website
            </a>
          </div>

          <p className="text-base font-semibold text-zinc-300">
            We build, host, and maintain a simple professional website for your
            business.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-5 text-xl font-extrabold"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-base text-white">
                ✓
              </span>
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-100 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black sm:text-4xl">How it works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-md bg-white p-5 shadow-sm">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-zinc-950 text-lg font-black text-white">
                  {index + 1}
                </div>
                <p className="text-xl font-extrabold leading-tight">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-md border-2 border-zinc-950 p-6 text-center">
          <p className="text-2xl font-black sm:text-3xl">
            Built for local businesses in Austin
          </p>
        </div>
      </section>

      <section id="lead-form" className="bg-zinc-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-black leading-tight">
            Get your website started
          </h2>
          <p className="mt-3 text-xl font-semibold text-zinc-300">
            Tell us about your business and we&apos;ll reach out.
          </p>

          <form className="mt-7 space-y-4 rounded-md bg-white p-5 text-zinc-950 sm:p-6">
            <label className="block">
              <span className="text-sm font-black uppercase text-zinc-700">
                Name
              </span>
              <input
                name="name"
                type="text"
                required
                className="mt-2 h-14 w-full rounded-md border border-zinc-300 px-4 text-lg font-semibold outline-none focus:border-zinc-950 focus:ring-2 focus:ring-yellow-300"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black uppercase text-zinc-700">
                Business name
              </span>
              <input
                name="business"
                type="text"
                required
                className="mt-2 h-14 w-full rounded-md border border-zinc-300 px-4 text-lg font-semibold outline-none focus:border-zinc-950 focus:ring-2 focus:ring-yellow-300"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black uppercase text-zinc-700">
                Phone
              </span>
              <input
                name="phone"
                type="tel"
                required
                className="mt-2 h-14 w-full rounded-md border border-zinc-300 px-4 text-lg font-semibold outline-none focus:border-zinc-950 focus:ring-2 focus:ring-yellow-300"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black uppercase text-zinc-700">
                What do you do?
              </span>
              <textarea
                name="work"
                required
                rows={4}
                className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 text-lg font-semibold outline-none focus:border-zinc-950 focus:ring-2 focus:ring-yellow-300"
              />
            </label>

            <button
              type="submit"
              className="min-h-14 w-full rounded-md bg-yellow-400 px-6 text-xl font-black text-zinc-950 transition hover:bg-yellow-300"
            >
              Get my website
            </button>
          </form>
        </div>
      </section>

      <section className="px-5 py-14 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Ready to get your website?
          </h2>
          <a
            href="tel:5120000000"
            className="mt-6 inline-flex min-h-14 items-center justify-center rounded-md bg-zinc-950 px-8 text-xl font-black text-white transition hover:bg-zinc-800"
          >
            Call Now
          </a>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950 p-3 sm:hidden">
        <a
          href="tel:5120000000"
          className="flex min-h-14 w-full items-center justify-center rounded-md bg-yellow-400 text-xl font-black text-zinc-950"
        >
          Call Now
        </a>
      </div>
    </main>
  );
}
