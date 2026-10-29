import { createClient } from '@sanity/client';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type {
	Banner,
	BilXtra,
	ContactDetails,
	Customer,
	Employee,
	Forms,
	Hero,
	Post,
	SalesTeamBlock
} from '$lib/utils/sanity';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Missing Sanity env (PUBLIC_SANITY_PROJECT_ID / PUBLIC_SANITY_DATASET)');
}

/**
 * Server-only Sanity client for data fetching.
 * - CDN enabled in production for bandwidth reduction
 * - Lives under `src/lib/server/` so it cannot be imported into the browser bundle
 */
export const sanityServerClient = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: !import.meta.env.DEV,
	apiVersion: '2023-03-20'
});

export async function getPosts(): Promise<Post[]> {
	return await sanityServerClient.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await sanityServerClient.fetch(
		groq`*[_type == "post" && slug.current == $slug][0] {
			...,
			pdfFile { ..., asset->{ _id, url } }
		}`,
		{ slug }
	);
}

export async function getPostPage(page: string): Promise<Post> {
	return await sanityServerClient.fetch(
		groq`*[_type == "post" && slug.current == $page][0] {
			...,
			pdfFile { ..., asset->{ _id, url } }
		}`,
		{ page }
	);
}

export async function getHomePage(): Promise<any> {
	const query = groq`*[_type == "homepage"] {
		title,
		"pageBuilderContent": pageBuilder[] {
		  _key,
		  _type,
		  _type == "brands" => {
			"brands": @-> {
			  title,
			  "selectedBrands": selectedBrands[]-> {
				brandLogo,
				brandName,
				brandUrl,
				productType
			  }
			}
		  },
		  _type == "banner" => {
			"banner": @-> {
			  ...
			}
		  },
		  _type == "salesTeamBlock" => {
			...
		  },
		  _type == "hero" => {
			  "hero": @-> {
				...
			  }
		  },
		  _type == "postsGrid" => {
			"selectedPosts": selectedPosts[]-> {
			  _id,
			  title,
			  slug,
			  excerpt,
			  mainImage {
				asset->{
				  _id,
				  url
				}
			  }
			}
		  },
		  _type == "customerGrid" => {
			"selectedCustomers": selectedCustomers[]-> {
			  _id,
			  kundeNavn,
			  kundeLogo,
			  kundeLink
			}
		  },
		  _type == "existingPost" => {
			"existingPostContent": @-> {
			  ...
			}
		  },
		  _type == "salesPeople" => {
			"salesPeopleBlock": @->{
				...,
				link -> {
				  slug
				},
				"salesPeople": salesPeople[]{
				  ...,
				  "link": link-> {
					slug
				  }
				}
			  }
		  }
		}
	  }`;

	return await sanityServerClient.fetch(query);
}

export async function getBanner(): Promise<Banner> {
	return await sanityServerClient.fetch(groq`*[_type == "banner"][0]`);
}

export async function getHero(): Promise<Hero> {
	return await sanityServerClient.fetch(groq`*[_type == "hero"][0]`);
}

export async function getEmployees(): Promise<Employee[]> {
	return await sanityServerClient.fetch(groq`*[_type == "profile" && !(_id match "drafts.*")]`);
}

export async function getSalesTeam(): Promise<SalesTeamBlock> {
	return await sanityServerClient.fetch(groq`*[_type == "salesTeamBlock"] {
			...,
			link -> {
			  slug
			},
			"salesPeople": salesPeople[]{
			  ...,
			  "link": link-> {
				slug
			  }
			}
		  }`);
}

export async function getContactDetails(): Promise<ContactDetails> {
	return await sanityServerClient.fetch(groq`*[_type == "contactDetails"][0]`);
}

export async function getBilXtraIfo(): Promise<BilXtra> {
	return await sanityServerClient.fetch(groq`*[_type == "bilXtra"][0]`);
}

export async function getBrands(): Promise<Customer[]> {
	return await sanityServerClient.fetch(groq`*[_type == "supplier"]`);
}

export async function getForms(): Promise<Forms[]> {
	return await sanityServerClient.fetch(groq`
		*[_type == "forms"]{
        _type,
        _createdAt,
        _id,
        _rev,
        _updatedAt,
        title,
        description,
        file {
          _type,
          "asset": asset->{
            _id,
            url,
            _type
          }
        }
      }`);
}
