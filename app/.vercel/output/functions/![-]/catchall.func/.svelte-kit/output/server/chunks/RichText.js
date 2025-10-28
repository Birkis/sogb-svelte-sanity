import { W as ensure_array_like, Y as attr_class, X as attr, a2 as clsx, a0 as bind_props } from "./index2.js";
import { e as escape_html, f as fallback } from "./context.js";
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function RichText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let blocks = $$props["blocks"];
    let customStyles = fallback($$props["customStyles"], () => ({}), true);
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(blocks);
    for (let $$index_3 = 0, $$length = each_array.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array[$$index_3];
      if (item.style === "h1") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h1 class="text-4xl font-semibold">${escape_html(item.children[0].text)}</h1>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (item.style === "h2") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h2 class="text-3xl font-semibold">${escape_html(item.children[0].text)}</h2>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (item.style === "h3") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<h3 class="text-2xl font-semibold">${escape_html(item.children[0].text)}</h3>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (item.style === "h4") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<h4 class="text-xl font-semibold">${escape_html(item.children[0].text)}</h4>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (item.style === "strong") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<p class="py-2 font-bold">${escape_html(item.children[0].text)}</p>`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (item.style === "blockquote") {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`<blockquote${attr_class(`
        py-2 italic text-lg border-l-4 border-gray-500 pl-4
        ${customStyles.width ? `${customStyles.width}` : "w-full"}
      `)}>${escape_html(item.children[0].text)}</blockquote>`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (item.listItem === "bullet") {
                    $$renderer2.push("<!--[-->");
                    $$renderer2.push(`<ul class="list-disc list-inside"><!--[-->`);
                    const each_array_1 = ensure_array_like(item.children);
                    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                      let child = each_array_1[$$index];
                      $$renderer2.push(`<li>${escape_html(child.text)}</li>`);
                    }
                    $$renderer2.push(`<!--]--></ul>`);
                  } else {
                    $$renderer2.push("<!--[!-->");
                    if (item.markDefs && item.markDefs.length > 0 && item.markDefs[0]._type === "link") {
                      $$renderer2.push("<!--[-->");
                      $$renderer2.push(`<a${attr("href", item.markDefs[0].href)}${attr_class(clsx(customStyles.linkColor || "text-blue-500"))}><!--[-->`);
                      const each_array_2 = ensure_array_like(item.children);
                      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                        let child = each_array_2[$$index_1];
                        $$renderer2.push(`<!---->${escape_html(child.text)}`);
                      }
                      $$renderer2.push(`<!--]--></a>`);
                    } else {
                      $$renderer2.push("<!--[!-->");
                      $$renderer2.push(`<p class="py-2"><!--[-->`);
                      const each_array_3 = ensure_array_like(item.children);
                      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
                        let child = each_array_3[$$index_2];
                        if (child.marks && child.marks.includes("strong")) {
                          $$renderer2.push("<!--[-->");
                          $$renderer2.push(`<strong>${escape_html(child.text)}</strong>`);
                        } else {
                          $$renderer2.push("<!--[!-->");
                          if (child.marks && child.marks.includes("em")) {
                            $$renderer2.push("<!--[-->");
                            $$renderer2.push(`<em>${escape_html(child.text)}</em>`);
                          } else {
                            $$renderer2.push("<!--[!-->");
                            $$renderer2.push(`${escape_html(child.text)}`);
                          }
                          $$renderer2.push(`<!--]-->`);
                        }
                        $$renderer2.push(`<!--]-->`);
                      }
                      $$renderer2.push(`<!--]--></p>`);
                    }
                    $$renderer2.push(`<!--]-->`);
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { blocks, customStyles });
  });
}
export {
  RichText as R,
  formatDate as f
};
