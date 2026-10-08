import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-6 shadow-sm md:grid-cols-2 md:p-10 lg:p-14">
        {/* Decorative Circle */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/60 blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Discover Your Next Read
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Books to
            <span className="text-emerald-600"> freshen up </span>
            your bookshelf
          </h2>

          <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
            Explore amazing books, discover new stories, and find your next
            favorite read—all in one place.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn border-0 bg-emerald-600 px-7 text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl">
              View The List
            </button>

            <button className="btn btn-ghost text-slate-700">
              Learn More →
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={bannerImage}
              alt="Books on a bookshelf"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
