import React from "react";
import { Button } from "./Button";

export const CustomOrder = () => {
  return (
    <section
      className="py-16 px-8 bg-background flex justify-center"
      id="custom-orders">
      <div className="w-full max-w-200">
        <div className="bg-transparent border-2 border-dashed border-border rounded-2xl p-12 relative max-md:p-8 max-sm:p-4">
          <div className="flex justify-between items-start mb-8">
            <div className="text-center flex-1">
              <h2 className="text-3xl mb-2 font-serif font-bold text-secondary">
                Need a Custom cake?
              </h2>
              <p className="text-muted text-[0.95rem] max-w-100 mx-auto">
                Fill in the details below and our lead baker will get back to
                you with a custom quote.
              </p>
            </div>
            <div className="text-5xl opacity-50 absolute top-8 right-8 max-md:hidden">
              🎂
            </div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[0.9rem] font-semibold text-secondary">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="p-3 border border-border rounded-lg bg-white outline-none transition-colors duration-200 focus:border-secondary text-[0.95rem]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.9rem] font-semibold text-secondary">
                  Event Type
                </label>
                <select className="p-3 border border-border rounded-lg bg-white outline-none transition-colors duration-200 focus:border-secondary text-[0.95rem]">
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.9rem] font-semibold text-secondary">
                  Date
                </label>
                <input
                  type="date"
                  className="p-3 border border-border rounded-lg bg-white outline-none transition-colors duration-200 focus:border-secondary text-[0.95rem]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.9rem] font-semibold text-secondary">
                  Budget Range
                </label>
                <input
                  type="text"
                  placeholder="e.g. N30k - N50k"
                  className="p-3 border border-border rounded-lg bg-white outline-none transition-colors duration-200 focus:border-secondary text-[0.95rem]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.9rem] font-semibold text-secondary">
                Additional Notes
              </label>
              <textarea
                placeholder="Theme, flavors, dietary requirements..."
                rows={4}
                className="p-3 border border-border rounded-lg bg-white outline-none transition-colors duration-200 focus:border-secondary text-[0.95rem]"></textarea>
            </div>

            <Button
              variant="secondary"
              className="mt-4 w-full p-4 rounded-lg text-base"
              type="button">
              Request Custom Order
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
