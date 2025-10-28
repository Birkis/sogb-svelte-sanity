import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CJ_z0RW3.js","_app/immutable/chunks/DXnBOYcI.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/CBbuBPfZ.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BniCQta6.js","_app/immutable/chunks/LOdgb3q2.js","_app/immutable/chunks/fLdaqtOV.js","_app/immutable/chunks/Dskp9KqV.js","_app/immutable/chunks/7YGlKFBW.js","_app/immutable/chunks/CsADvZg0.js","_app/immutable/chunks/5-z_T_YA.js","_app/immutable/chunks/BSTNQZyB.js","_app/immutable/chunks/CrqJEF-O.js","_app/immutable/chunks/DQc0Uil7.js","_app/immutable/chunks/DVmcspCf.js","_app/immutable/chunks/eNzDW-GZ.js","_app/immutable/chunks/D4hICAc4.js","_app/immutable/chunks/BE3ftbkZ.js","_app/immutable/chunks/wL22vLqa.js"];
export const stylesheets = [];
export const fonts = [];
