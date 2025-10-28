import { X as attr, a1 as attr_style, a0 as bind_props } from "../../../../chunks/index2.js";
import { f as formatDate, R as RichText } from "../../../../chunks/RichText.js";
import { u as urlFor } from "../../../../chunks/image.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let imagePosition;
    let data = $$props["data"];
    let blocks = data.body;
    let x = 50;
    let y = 50;
    if (data.mainImage?.hotspot) {
      x = data.mainImage.hotspot.x * 100;
      y = data.mainImage.hotspot.y * 100;
    }
    imagePosition = `object-fit: cover; object-position: ${x}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section>`);
    if (data.mainImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img class="w-full h-[400px] object-cover"${attr("src", urlFor(data.mainImage.asset).url())}${attr("alt", `Cover image for ${data.title}`)}${attr_style(imagePosition)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mx-auto max-w-[80%] md:max-w-[640px] py-24"><div class="flex items-start gap-4">`);
    if (data.pdfFile && data.pdfFile.asset) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="flex-shrink-0 border border-black text-black font-bold py-4 px-4 rounded-sm hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap">LAST NED PDF</button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-grow"><h1 class="text-4xl font-bold">${escape_html(data.title)}</h1> <p class="text-sm text-gray-500 pb-4 pt-1">${escape_html(formatDate(data._createdAt))}</p> `);
    if (data.excerpt) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-lg mb-4 font-semibold">${escape_html(data.excerpt)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    RichText($$renderer2, {
      blocks,
      customStyles: { linkColor: "text-red-500", width: "w-full" }
    });
    $$renderer2.push(`<!----></div></div></div></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
