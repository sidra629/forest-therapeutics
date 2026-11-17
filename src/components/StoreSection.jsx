import React from "react";
import { storeProducts } from "../data/mockData";

const cream = "#e6dcd3";
const charcoal = "#1c1c1e";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
// Price ke numbers seedhe dikhane ke liye
const plain = { fontFamily: "system-ui, Arial, sans-serif" };

export default function StoreSection() {
  return (
    <section
      id="store"
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{ backgroundColor: cream, color: charcoal }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2
            className="mb-5 text-3xl font-medium uppercase leading-[1.1] sm:text-5xl"
            style={serif}
          >
            Apothecary &amp; Bookstore
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed opacity-75 sm:text-lg">
            Discover digital coursework downloads, ritual tools, and apothecary
            supplies fulfilled via AzureGreen dropshipping.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {storeProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col justify-between p-6 shadow-xl"
              style={{ backgroundColor: charcoal, color: cream }}
            >
              <div>
                <span className="mb-3 block text-[11px] font-semibold uppercase tracking-wider opacity-60">
                  {product.category}
                </span>
                <h3
                  className="mb-4 text-xl font-semibold uppercase leading-snug"
                  style={serif}
                >
                  {product.title}
                </h3>
              </div>
              <div
                className="mt-4 flex items-center justify-between pt-4"
                style={{ borderTop: `1px solid ${cream}33` }}
              >
                <span className="text-xl font-semibold" style={plain}>
                  {product.price}
                </span>
                <button
                  onClick={() =>
                    alert(
                      `Redirecting to Stripe checkout for: ${product.title}`,
                    )
                  }
                  className="rounded px-4 py-2 text-xs font-medium transition hover:opacity-80"
                  style={{ backgroundColor: cream, color: charcoal }}
                >
                  Purchase
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
