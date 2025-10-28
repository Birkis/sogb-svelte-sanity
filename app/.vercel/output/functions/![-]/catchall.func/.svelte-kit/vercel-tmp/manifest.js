export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Aapenhetsloven.pdf","TeamPicture.png","bilXtra_logo.png","default_profile.jpg","favicon.png","global.css","image_1.png","image_2.png","image_3.png","image_4.png","image_5.png","logo.webp","profilePic_1.png","profilePic_2.png","profilePic_3.png","profilePic_4.png","sanity.svg","svelte.svg"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg",".css":"text/css",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.LKS7MgAY.js",app:"_app/immutable/entry/app.CLGlT3AX.js",imports:["_app/immutable/entry/start.LKS7MgAY.js","_app/immutable/chunks/NqW3BoP5.js","_app/immutable/chunks/LOdgb3q2.js","_app/immutable/chunks/DVmcspCf.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/Bl-_U8ph.js","_app/immutable/entry/app.CLGlT3AX.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/LOdgb3q2.js","_app/immutable/chunks/Dskp9KqV.js","_app/immutable/chunks/BniCQta6.js","_app/immutable/chunks/Bl-_U8ph.js","_app/immutable/chunks/7YGlKFBW.js","_app/immutable/chunks/5-z_T_YA.js","_app/immutable/chunks/fFWynACa.js","_app/immutable/chunks/CrqJEF-O.js","_app/immutable/chunks/DQc0Uil7.js","_app/immutable/chunks/DVmcspCf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/bilxtra",
				pattern: /^\/bilxtra\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/hms",
				pattern: /^\/hms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/investors",
				pattern: /^\/investors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/people",
				pattern: /^\/people\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/reklamasjon",
				pattern: /^\/reklamasjon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/skjema",
				pattern: /^\/skjema\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/subsidiaries",
				pattern: /^\/subsidiaries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
