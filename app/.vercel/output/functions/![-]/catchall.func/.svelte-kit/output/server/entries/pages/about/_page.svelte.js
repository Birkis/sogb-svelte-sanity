import { X as attr, a1 as attr_style, a0 as bind_props } from "../../../chunks/index2.js";
import { f as formatDate, R as RichText } from "../../../chunks/RichText.js";
import { u as urlFor } from "../../../chunks/image.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let imagePosition;
    let data = $$props["data"];
    let post = data.page;
    let blocks = post.body;
    let x;
    let y;
    if (post && post.mainImage && post.mainImage.hotspot) {
      x = post.mainImage.hotspot.x * 100;
      y = post.mainImage.hotspot.y * 100;
    }
    imagePosition = `object-fit: cover; object-position: ${x}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section>`);
    if (post.mainImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img class="w-full h-[400px] object-cover"${attr("src", urlFor(post.mainImage).width(800).url())}${attr("alt", `Cover image for ${post.title}`)}${attr_style(imagePosition)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mx-auto max-w-[80%] md:w-[480px] py-24"><h1 class="text-4xl font-bold">${escape_html(post.title)}</h1> <p class="text-sm text-gray-500 pb-4 pt-1">${escape_html(formatDate(post._createdAt))}</p> `);
    if (post.excerpt) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-lg mb-4 font-semibold">${escape_html(post.excerpt)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    RichText($$renderer2, { blocks });
    $$renderer2.push(`<!----></div></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
