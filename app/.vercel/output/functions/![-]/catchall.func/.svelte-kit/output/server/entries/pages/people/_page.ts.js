import { h as getEmployees } from "../../../chunks/sanity.js";
import { error } from "@sveltejs/kit";
const load = async () => {
  try {
    const [employees] = await Promise.all([getEmployees()]);
    if (!employees) {
      throw error(404, "Posts not found");
    }
    return {
      props: {
        employees
      }
    };
  } catch (err) {
    console.error(err);
    throw error(500, "Internal server error");
  }
};
export {
  load
};
