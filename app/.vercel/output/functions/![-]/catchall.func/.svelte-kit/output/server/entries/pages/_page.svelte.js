import { X as attr, Z as stringify, a0 as bind_props, W as ensure_array_like, a1 as attr_style } from "../../chunks/index2.js";
import { u as urlFor } from "../../chunks/image.js";
import { e as escape_html } from "../../chunks/context.js";
function HighlightedPeople($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    const salesPeople = content.salesPeopleBlock;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="py-8 md:px-14"><div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-8"><div class="md:col-span-3 p-4"><h2 class="text-3xl md:text-5xl font-black text-gray-700 w-12/12 md:w-10/12">${escape_html(salesPeople.mainTitle)}</h2></div> `);
    if (salesPeople.subTitle != null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="p-4"><h3 class="text-2xl text-gray-400 font-extrabold md:text-3xl">${escape_html(salesPeople.subTitle)}</h3></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto"><div class="p-4 md:col-span-2 h-[500px] md:h-[500]"><img class="w-full h-2/3 object-cover object-top mb-4"${attr("src", urlFor(salesPeople.salesPeople[0].image).width(500).url())} alt=""/> `);
    if (salesPeople.salesPeople[0].description != null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3 class="text-3xl font-semibold text-gray-500 py-4">${escape_html(salesPeople.salesPeople[0].description)}</h3>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (salesPeople.salesPeople[0].link.slug.current) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/post/${stringify(salesPeople.salesPeople[0].link.slug.current)}`)} class="py-2 text-base font-semibold text-slate-900 hover:text-black underline">Les mer</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="p-4 md:col-span-1 h-[500px] md:h-[500]"><img class="w-full h-3/4 object-cover object-top"${attr("src", urlFor(salesPeople.salesPeople[1].image).width(250).url())} alt=""/> <div class="bg-gray-800 h-1/4"><p class="text-white p-4">${escape_html(salesPeople.salesPeople[1].description)}</p> `);
    if (salesPeople.salesPeople[1].link.slug.current) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/post/${stringify(salesPeople.salesPeople[1].link.slug.current)}`)} class="py-2 px-4 text-base font-semibold text-white underline">Les mer</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="p-4 md:col-span-1 h-[500px] md:h-[500]"><img class="w-full h-3/4 object-cover object-top"${attr("src", urlFor(salesPeople.salesPeople[2].image).width(250).url())} alt=""/> <div class="bg-gray-800 h-1/4"><p class="text-white p-4">${escape_html(salesPeople.salesPeople[2].description)}</p> `);
    if (salesPeople.salesPeople[2].link.slug.current) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/post/${stringify(salesPeople.salesPeople[2].link.slug.current)}`)} class="py-2 px-4 text-base font-semibold text-white underline">Les mer</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    bind_props($$props, { content });
  });
}
function CustomerGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(content);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(item.brandName)}</p> <img${attr("src", urlFor(item.brandLogo).url())}${attr("alt", item.brandName)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { content });
  });
}
function PostGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 mx-4"><!--[-->`);
    const each_array = ensure_array_like(content.selectedPosts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="bg-white"><div class="aspect-w-1 aspect-h-1 w-full"><img class="object-cover h-[300px] w-full"${attr("src", urlFor(item.mainImage).url())} alt="Post image"/></div> <div class="p-6"><h2 class="text-2xl font-bold mb-2">${escape_html(item.title)}</h2> <p class="text-gray-700 text-base">${escape_html(item.excerpt)}</p> <button class="font-bold text-lg text-gray-800 underline mt-4 hover:font-extrabold text-black"><a${attr("href", `/post/${item.slug.current}`)}>Les mer</a></button></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { content });
  });
}
function ExistingPost($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    let post = content.existingPostContent;
    $$renderer2.push(`<div class="p-4 bg-gray-700 flex flex-col sm:flex-row"><div class="aspect-w-1 aspect-h-1 w-full sm:w-1/2"><img class="object-cover"${attr("src", urlFor(post.mainImage).width(850).quality(60).url())} alt="Post image"/></div> <div class="p-6 w-full my-auto mx-auto md:w-1/3"><h2 class="text-2xl text-white font-bold mb-2">${escape_html(post.title)}</h2> <p class="text-gray-100 text-base">${escape_html(post.excerpt)}</p> <button class="rounded-md bg-blue-500 px-3.5 my-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a${attr("href", `/post/${post.slug.current}`)}>Les mer</a></button></div></div>`);
    bind_props($$props, { content });
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    $$renderer2.push(`<div class="bg-slate-950 w-full relative"><img${attr("src", urlFor(content.hero.backgroundImage).width(1e3).quality(30).url())} alt="Background" class="absolute inset-0 w-full h-full object-cover z--10 opacity-50"/> <div class="relative isolate px-6 pt-14 lg:px-8"><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div> <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"><div class="max-w-s mx-auto my-2 sm:mb-8 sm:flex sm:justify-center gap-2"><div class="text-center md:text-left relative rounded-full px-3 my-2 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/70 hover:ring-gray-900/20">Finn sikkerhetsdatablad. <a href="https://app.ecoonline.com/public/search-configuration/search?companyID=1002502&amp;prodType=er&amp;descrLang=1" class="font-bold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Les mer <span aria-hidden="true">→</span></a></div> <div class="text-center md:text-left relative rounded-full px-3 my-2 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/70 hover:ring-gray-900/20">Reklamasjon. <a href="/skjema" class="font-bold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Finn skjema <span aria-hidden="true">→</span></a></div></div> <div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">${escape_html(content.hero.heading)}</h1> <p class="mt-6 text-lg leading-8 text-gray-200">${escape_html(content.hero.subheading)}</p> <div class="mt-10 flex items-center justify-center gap-x-6"><a${attr("href", content.hero.primaryCta.link)} class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">${escape_html(content.hero.primaryCta.label)}</a></div></div></div> <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"></div></div></div>`);
    bind_props($$props, { content });
  });
}
function Banner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let banner, hotspot, objectPositionStyle;
    let content = $$props["content"];
    let x, y;
    banner = content && content.banner ? content.banner : null;
    hotspot = banner && banner.mainImage && banner.mainImage.hotspot ? banner.mainImage.hotspot : null;
    if (hotspot) {
      x = hotspot.x * 100;
      y = hotspot.y * 100;
    }
    objectPositionStyle = `object-fit: cover; background-position: ${x}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="opacity-80 banner bg-cover bg-center h-[500px] flex items-center justify-center"${attr_style(`${stringify(objectPositionStyle)} background-image: url(${stringify(urlFor(banner.mainImage).url())})`)}><div class="text-white p-5 w-10/12 md:w-6/12 mx-auto bg-black opacity-90"><h2 class="text-4xl font-bold mb-4">${escape_html(banner.bannerTitle)}</h2> <div class="mb-8">`);
    if (banner.bannerBody) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(banner.bannerBody);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let block = each_array[$$index_1];
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(block.children);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let child = each_array_1[$$index];
          $$renderer2.push(`<p class="mb-2">${escape_html(child.text)}</p>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (banner.bannerLink) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", banner.bannerLink)} class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">${escape_html(banner.bannerCTA)}</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { content });
  });
}
function BrandGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    let brands = content.brands.selectedBrands;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="my-8 mx-4"><div class="w-full text-center"><h2 class="text-4xl w-full font-bold">${escape_html(content.brands.title)}</h2></div> <div class="flex flex-wrap justify-center py-6"><!--[-->`);
    const each_array = ensure_array_like(brands);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="w-1/2 h-12 md:h-24 md:w-1/3 lg:w-1/5 xl:w-1/6 2xl:w-1/7 flex justify-center items-end"><img class="w-full object-contain filter grayscale mx-4 my-2 px-2 md:px-8"${attr("src", urlFor(item.brandLogo).url())}${attr("alt", item.brandName)}/></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { content });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const content = data.props.homepage[0] ?? [];
    const componentMap = {
      postsGrid: PostGrid,
      existingPost: ExistingPost,
      salesPeople: HighlightedPeople,
      customerGrid: CustomerGrid,
      hero: Hero,
      banner: Banner,
      brands: BrandGrid
    };
    if (content && content.pageBuilderContent) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(content.pageBuilderContent);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let component = each_array[$$index];
        if (componentMap[component._type]) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          componentMap[component._type]?.($$renderer2, { content: component });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<p>Component of type "${escape_html(component._type)}" not found.</p>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>No content available to display.</p>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
