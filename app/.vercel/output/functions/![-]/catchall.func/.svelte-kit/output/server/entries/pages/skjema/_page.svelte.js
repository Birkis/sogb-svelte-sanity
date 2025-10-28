import { W as ensure_array_like, X as attr, a0 as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const forms = data.forms;
    console.log(forms);
    $$renderer2.push(`<div class="container mx-auto py-8"><h1 class="text-3xl font-bold text-center mb-8">Skjema</h1> <div class="flex flex-col items-center"><ul class="w-full max-w-lg"><!--[-->`);
    const each_array = ensure_array_like(forms);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let form = each_array[$$index];
      $$renderer2.push(`<li class="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"><div class="flex-1"><span class="text-lg font-medium">${escape_html(form.title)}</span> `);
      if (form.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-sm text-gray-600">${escape_html(form.description)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (form.file?.asset?.url) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", form.file.asset.url)} download="" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer">Last ned</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="text-sm text-red-500">Skjema ikke tilgjengelig</span>`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
