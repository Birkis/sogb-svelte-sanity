import { f as getContactDetails } from "../../../chunks/sanity.js";
import { error } from "@sveltejs/kit";
const load = (async () => {
  const data = await getContactDetails();
  if (!data) {
    throw error(404, "Posts not found");
  }
  return {
    data
  };
});
export {
  load
};
