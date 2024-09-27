import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { PortableText } from '@portabletext/svelte';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
		slug
	});
}

export async function getPostPage(page: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $page][0]`, {page});
}


export async function getHomePage(): Promise<Homepage> {

	let query = groq`*[_type == "homepage"] {
		title,
		"pageBuilderContent": pageBuilder[] {
		  _key,
		  _type,
		  // Resolve references for 'postsGrid'
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
			  // Add other fields as needed
			}
		  },
		  // Resolve references for 'customerGrid'
		  _type == "customerGrid" => {
			"selectedCustomers": selectedCustomers[]-> {
			  _id,
			  kundeNavn, // Assuming this is the customer name
			  kundeLogo, // Assuming this is the customer logo
			  kundeLink  // Assuming this is the link to the customer
			}
		  },
		  // Resolve 'existingPost' reference
		  _type == "existingPost" => {
			
			"existingPostContent": @-> {
			  ...
			} 
			// Add other fields as needed
		  },
		  // Resolve 'salesPeople' reference
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
		  // Other types can be added here
		}
	  }
	  `;

	return await client.fetch(query);

}

// Tok meg litt tid å finne ut at jeg måtte definere Banner som en array her. 
// Men siden jeg skal hente alle banners, så blir det altså en array
// DVS. Hvis jeg hadde en unik banner jeg skulle hentet så hadde jeg naturligvis endret på
// groq-spørringen, men det droppet jeg.

export async function getBanner(): Promise<Banner> {
	return await client.fetch(groq`*[_type == "banner"][0]`)
}

export async function getHero(): Promise<Hero> {
	try {
		return await client.fetch(groq`*[_type == "hero"][0]`);
	} catch (error) {
		console.error('Error fetching sales team:', error);
		throw error;
	}
}

export async function getEmployees(): Promise<Employee[]> {
	return await client.fetch(groq`*[_type == "profile" && !(_id match "drafts.*")]`);
}
  

export async function getPageContent(): Promise<Page[]> {
	try {
		return await client.fetch(groq`*[_type == "page"]`);
	} catch (error) {
		console.error('Error fetching page content:', error);
		throw error;
	}
}

export async function getSalesTeam(): Promise<SalesTeamBlock> {
	try {
		return await client.fetch(groq`*[_type == "salesTeamBlock"] {
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
		  `);
	} catch (error) {
		console.error('Error fetching sales team:', error);
		throw error;
	}
}

export async function getContactDetails(): Promise<ContactDetails> {
	try {
		return await client.fetch(groq`*[_type == "contactDetails"][0]`);
	} catch (error) {
		console.error('Error fetching contact details:', error);
		throw error;
	}
}

export async function getBilXtraIfo(): Promise<BilXtra> {
	try {
		return await client.fetch(groq`*[_type == "bilXtra"][0]`);
	} catch (error) {
		console.error('Error fetching BilXtra info:', error);
		throw error;
	}

}

export async function getBrands(): Promise<Customer[]> {
	try {
		return await client.fetch(groq`*[_type == "supplier"]`);
	} catch (error) {
		console.error('Error fetching brands:', error);
		throw error;
	}
}


export async function getForms(): Promise<Forms[]> {
	try {
	  // Fetch the required fields to match the Forms interface
	  return await client.fetch(groq`
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
	} catch (error) {
	  console.error('Error fetching forms:', error);
	  throw error;
	}
  }


export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: {
		asset: ImageAsset;
		hotspot?: {
			x: number;
			y: number;
			height: number;
			width: number;
		};
	};
	body: PortableTextBlock[];
	pdfFile?: {
		asset: {
			url: string;
		};
	};
}

export interface Banner {
	_type: 'banner';
	_createdAt: string;
	slug: Slug;
	bannerTitle?: string;
	bannerBody?: PortableTextBlock[];
	bannerCTA?: string;
	bannerLink: string;
	mainImage: ImageAsset;
}

export interface supplierBrand {
	_type: 'supplier';
	_createdAt: string;
	slug: Slug;
	brandName: string;
	productType: string;
	brandUrl: string;
	brandLogo: ImageAsset;
}

export type FlexibleComponent =  ImageGallery | Hero | HeaderBanner;

export interface Page {
  _type: 'page';
  _createdAt: string; // Matched to 'createdAt' in Sanity schema
  title: string;
  paragraphs: Paragraph[];
  additionalImages?: ImageAsset[];
  flexibleComponents?: FlexibleComponent[]; // Added to match 'flexibleComponents' in Sanity schema
}
  
interface Paragraph {
text: string;
images?: ImageAsset[];
}

export interface Hero {
	_type: 'hero';
	_createdAt: string;
	backgroundImage: {
	  src: string;
	  alt?: string;
	};
	readMoreLabel?: string;
	readMoreLink?: string;
	heading: string;
	subheading: string;
	primaryCta: {
	  label: string;
	  link: string;
	};
	secondaryCta: {
	  label: string;
	  link: string;
	};
  }

export interface ImageGallery {
_type: 'imageGallery';
title: string;
description: string;
images: ImageAsset[];
}  

export interface HeaderBanner {
	createdAt: string; // ISO datetime string
	heading: string;
	_type: string;
	slug: {
	  _type: 'slug';
	  current: string;
	};
	bannerTitle: string;
	bannerBody: any[]; // 'any' type for now, adjust based on your block content structure
	bannerCTA: string;
	bannerLink: string;
	mainImage: {
	  _type: 'image';
	  asset: {
		_ref: string; // Reference to the image asset
		_type: 'reference';
		url: string; // URL to access the image
	  };
	};
  }

export interface Employee {
	_type: 'profile';
	_createdAt: string;
	name: string;
	title: string;
	image: ImageAsset;
	department: string;
	firstName: string;
	lastName: string;
}


interface SalesPerson {
	_type: 'object';
	image: ImageAsset;
	description: string;
  }
  
export interface SalesTeamBlock {
	_type: 'object';
	mainTitle: string;
	subTitle: string;
	salesPeople: SalesPerson[];
	bottomText: string;
  }

export interface Customer {
// Define the structure for 'customer' type here
	id: string;
	brandName: string;
	brandLogo: ImageAsset;
	brandUrl: URL;

}

interface SocialMediaLink {
// Define the structure for 'socialMediaLink' type here
// Example:
	platform: string;
	url: string;
}
  
export interface ContactDetails {
_type: 'contactDetails';
businessAddress: string;
}


export interface BilXtra {
title: string;
excerpt: string;
mainImage: {
	// Assuming mainImage follows the standard Sanity image structure
	_type: 'image';
	asset: {
	_ref: string;
	_type: 'reference';
	};
	crop?: {
	_type: 'sanity.imageCrop';
	top: number;
	bottom: number;
	left: number;
	right: number;
	};
	hotspot?: {
	_type: 'sanity.imageHotspot';
	x: number;
	y: number;
	height: number;
	width: number;
	};
};
body: BlockContent[];
}

// Define BlockContent according to how you've structured 'blockContent' in Sanity
export interface BlockContent {
// This will depend on your 'blockContent' type definition in Sanity
// For example:
_type: 'block';
children: {
	_type: 'span';
	text: string;
	marks?: string[];
}[];
style: string;
// ... any other properties you have defined for blockContent
}


export interface RichTextBlock {
_key?: string;
_type: string;
style?: string;
children: {
	_key?: string;
	_type: string;
	text?: string;
	marks?: string[];
}[];
listItem?: string;
markDefs?: {
	_key: string;
	_type: string;
	href?: string;
}[];
}

export interface ExistingPost {
	mainIamge: ImageAsset;
	title: string;
	excerpt: string;
}

interface Homepage {
title: string;
pageBuilder: Array<
	Hero |
	TextWithImage |
	Gallery |
	Form |
	Video |
	GridLayout |
	SalesPeopleBlock |
	ImageGallery |
	Banner |
	BilXtra |
	Profile |
	PostsGrid |
	CustomerGrid |
	ExistingPost
>;
}

interface TextWithImage {

_type: 'textWithImage';
}

interface Gallery {
_type: 'gallery';
	}

interface Form {
_type: 'form';

}

interface Video {
_type: 'video';
}	

interface GridLayout {
_type: 'gridLayout';
}

interface SalesPeopleBlock {
_type: 'salesPeopleBlock';
}	

interface Profile {
_type: 'profile';
}

interface PostsGrid {
_type: 'postsGrid';
}

interface CustomerGrid {
_type: 'customerGrid';
}

export interface Brand {
	brandLogo: ImageAsset;
	brandName: string;
	brandUrl: string;
	productType: string;
}



export interface Forms {
	_type: 'forms';
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
	title: string;
	description: string;
	file: {
	  _type: 'file';
	  asset: {
		_id: string;
		url: string;
		_type: string;
	  };
	};
  }
  