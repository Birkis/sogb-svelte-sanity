import { V as store_get, W as ensure_array_like, X as attr, Y as attr_class, Z as stringify, _ as unsubscribe_stores, $ as slot } from "../../chunks/index2.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { c as contactInfo } from "../../chunks/contactInfo.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function NavBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const navLinks = [
      { name: "Hjem", href: "/" },
      { name: "Om oss", href: "/about" },
      // { name: 'HMS', href: '/hms' },
      { name: "Ansatte", href: "/people" },
      // { name: 'Kontakt', href: '/contact' },
      { name: "BilXtra", href: "/bilxtra" }
    ];
    let currentPage;
    let isOpen;
    {
      currentPage = store_get($$store_subs ??= {}, "$page", page).route.id;
      isOpen = false;
    }
    $$renderer2.push(`<nav class="bg-gray-950"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="-ml-2 mr-2 flex items-center md:hidden"><button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span class="absolute -inset-0.5"></span> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg> <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex flex-shrink-0 items-center"><a href="/"><img class="w-64" src="logo.webp" alt="Your Company"/></a></div> <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`rounded-md px-3 py-2 text-sm font-medium ${stringify(currentPage === link.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")}`)}>${escape_html(link.name)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div> `);
    if (isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="md:hidden" id="mobile-menu"><div class="space-y-1 px-2 pb-3 pt-2 sm:px-3"><!--[-->`);
      const each_array_1 = ensure_array_like(navLinks);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let link = each_array_1[$$index_1];
        $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`${stringify(currentPage === link.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")} block rounded-md px-3 py-2 text-base font-medium`)}>${escape_html(link.name)}</a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="bg-gray-800 text-white py-8"><div class="container mx-auto px-4"><div class="flex flex-wrap -mx-4"><div class="w-full md:w-1/3 px-4 my-16"><h5 class="text-sm font-regular text-red-500/75 mb-2">${escape_html(
      // Footer data structured as an object with arrays
      contactInfo.title
    )}</h5> <ul><!--[-->`);
    const each_array = ensure_array_like(Object.entries(contactInfo.location));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [key, value] = each_array[$$index];
      $$renderer2.push(`<li class="mb-2 text-gray-400 text-xs">${escape_html(`${key} : ${value}`)}</li>`);
    }
    $$renderer2.push(`<!--]--> <!--[-->`);
    const each_array_1 = ensure_array_like(Object.entries(contactInfo.contactOffice));
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let [key, value] = each_array_1[$$index_1];
      $$renderer2.push(`<li class="mb-2 text-gray-400 text-xs">${escape_html(`${key} : ${value}`)}</li>`);
    }
    $$renderer2.push(`<!--]--> <li><a${attr("href", contactInfo.Aapenhetsloven.AapenhetslovenLink)}>${escape_html(contactInfo.Aapenhetsloven.Aapenhetsloven)}</a></li> <li><a${attr("href", contactInfo.Aapenhetsloven.AapenhetslovenLink)} download="">Last ned</a></li></ul></div> <div class="w-full md:w-1/3 px-4 my-16"><h5 class="text-sm font-regular text-red-500/75 mb-2">Kundesenter</h5> <ul><!--[-->`);
    const each_array_2 = ensure_array_like(Object.entries(contactInfo.contactOrders));
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let [key, value] = each_array_2[$$index_2];
      $$renderer2.push(`<li class="mb-4 text-gray-400 text-xs">${escape_html(` ${value}`)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="w-full md:w-1/3 px-4 my-16"><h5 class="text-sm font-regular text-red-500/75 mb-2">Sosiale Medier</h5> <ul><!--[-->`);
    const each_array_3 = ensure_array_like(Object.entries(contactInfo.socialMedia));
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let [key, value] = each_array_3[$$index_3];
      $$renderer2.push(`<li class="mb-4 text-gray-400 text-xs"><a${attr("href", value)}>${escape_html(key)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="w-full mx-auto max-w-[1800px] bg-gray-100 svelte-12qhfyh"><nav class="svelte-12qhfyh">`);
  NavBar($$renderer);
  $$renderer.push(`<!----></nav> <main class="svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
