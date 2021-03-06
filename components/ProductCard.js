import Link from "next/link";
import { urlFor } from "../utils/sanity";

function ProductCard({ _id, title, mainImage, slug, defaultProductVariant }) {
  return (
    <Link href={`/products/${slug.current}`}>
      <a className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage: `url('${urlFor(mainImage)
              .auto("format")
              .fit("crop")
              .width(750)
              .quality(80)}`,
          }}
        >
         
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{title}</h3>
          <span className="text-gray-500 mt-2">
            ${defaultProductVariant?.price}
          </span>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
