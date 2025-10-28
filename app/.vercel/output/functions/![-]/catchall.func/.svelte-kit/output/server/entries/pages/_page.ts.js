import { g as getPosts, a as getBanner, b as getHero, c as getSalesTeam, d as getHomePage } from "../../chunks/sanity.js";
import { error } from "@sveltejs/kit";
const load = async () => {
  try {
    const [posts, banner, hero, salesTeam, homepage] = await Promise.all([getPosts(), getBanner(), getHero(), getSalesTeam(), getHomePage()]);
    ["posts", "banner", "hero", "salesTeam"].forEach((item) => {
      if (!eval(item)) {
        throw error(404, `${item.charAt(0).toUpperCase() + item.slice(1)} not found`);
      }
    });
    return {
      props: {
        posts,
        banner,
        hero,
        salesTeam,
        homepage
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
