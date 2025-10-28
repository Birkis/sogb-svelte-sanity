import { X as attr, Z as stringify, a0 as bind_props, W as ensure_array_like, Y as attr_class } from "../../../chunks/index2.js";
import { u as urlFor } from "../../../chunks/image.js";
import { e as escape_html } from "../../../chunks/context.js";
function Profile($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let fullName;
    let employee = $$props["employee"];
    fullName = `${employee.firstName} ${employee.lastName}`;
    $$renderer2.push(`<li class="bg-white/5 rounded-2xl overflow-hidden"><img class="aspect-[1/1] w-full rounded-2xl object-cover object-top"${attr("src", employee.profilePicture ? urlFor(employee.profilePicture).width(400).height(400).quality(10).url() : "default_profile.jpg")}${attr("alt", fullName)} loading="lazy"/> <div class="p-6"><h3 class="mt-2 text-lg font-semibold leading-8 tracking-tight text-white">${escape_html(fullName)}</h3> <p class="mt-1 text-base leading-7 text-gray-300 font-semibold">${escape_html(employee.department)}</p> <p class="mt-1 text-base leading-7 text-gray-300 font-light">${escape_html(employee.position)}</p> <div class="mt-0"><a${attr("href", `tel:${stringify(employee.phone)}`)} class="text-white text-base font-light">Tlf: ${escape_html(employee.phone)}</a> <a${attr("href", `mailto:${stringify(employee.email)}`)} class="text-blue-500 hover:text-blue-700 text-base underline">${escape_html(employee.email)}</a></div></div></li>`);
    bind_props($$props, { employee });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let departments, filteredEmployees;
    let data = $$props["data"];
    const { employees } = data.props;
    let searchQuery = "";
    let selectedDepartment = null;
    departments = [...new Set(employees.map((employee) => employee.department))];
    filteredEmployees = employees.filter((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase()) && selectedDepartment === null;
    });
    $$renderer2.push(`<div class="bg-gray-900 py-24 sm:py-32"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto lg:mx-0"><div class="w-full md:w-6/12"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Dette er oss</h2> <p class="mt-6 text-lg leading-8 text-gray-300">Vi er en dynamisk gruppe individer som er lidenskapelig opptatt av det vi gjør og dedikert til å levere de beste resultatene for våre kunder.</p></div> <input type="text"${attr("value", searchQuery)} placeholder="Finn ansatt" class="mt-6 w-full md:w-3/12 p-2 rounded border border-gray-300"/> <div class="mt-6 flex w-full flex-wrap gap-2"><button class="px-4 py-2 rounded bg-blue-500 text-white w-[140px]">Alle avdelinger</button> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(departments);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let department = each_array_1[$$index_1];
        $$renderer2.push(`<button${attr_class(`px-4 py-2 rounded text-white ${stringify(department === selectedDepartment ? "bg-blue-700" : "bg-blue-500")}`)} style="width: 140px;">${escape_html(department)}</button>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-6">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Alle avdelinger`);
    }
    $$renderer2.push(`<!--]--> <ul class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"><!--[-->`);
    const each_array_2 = ensure_array_like(filteredEmployees);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let employee = each_array_2[$$index_2];
      $$renderer2.push(`<li>`);
      Profile($$renderer2, { employee });
      $$renderer2.push(`<!----></li>`);
    }
    $$renderer2.push(`<!--]--></ul></h2></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
