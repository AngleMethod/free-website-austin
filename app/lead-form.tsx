"use client";

import { useState, type FormEvent } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const business = String(formData.get("business") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const work = String(formData.get("work") ?? "");

    const subject = "New website lead";
    const body = [
      `Name: ${name}`,
      `Business name: ${business}`,
      `Phone: ${phone}`,
      `What do you do?: ${work}`,
    ].join("\n");

    window.location.href = `mailto:josh@notecreativestudios.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-7 space-y-4 rounded-md bg-white p-5 text-zinc-950 sm:p-6"
    >
      <label className="block">
        <span className="text-sm font-black uppercase text-zinc-700">Name</span>
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
        <span className="text-sm font-black uppercase text-zinc-700">Phone</span>
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

      {submitted ? (
        <p className="text-center text-base font-black text-green-700" role="status">
          Thanks — we&apos;ll reach out shortly.
        </p>
      ) : null}
    </form>
  );
}
