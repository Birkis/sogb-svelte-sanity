import { k as getForms } from "../../../chunks/sanity.js";
const load = (async () => {
  const forms = await getForms();
  return { forms };
});
export {
  load
};
