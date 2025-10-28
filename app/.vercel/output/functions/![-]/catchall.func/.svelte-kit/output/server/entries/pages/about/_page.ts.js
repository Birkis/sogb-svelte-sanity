import { error } from "@sveltejs/kit";
import { e as getPostPage } from "../../../chunks/sanity.js";
const load = async () => {
  const page = await getPostPage("about");
  if (page) {
    return {
      page
    };
  }
  throw error(404, "Not found");
};
export {
  load
};
