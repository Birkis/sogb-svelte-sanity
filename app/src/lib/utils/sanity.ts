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
	return await client.fetch(groq`*[_type == "profile"]`)
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
		return await client.fetch(groq`*[_type == "salesTeamBlock"][0]`);
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


export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
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


interface Customer {
// Define the structure for 'customer' type here
	id: string;
	name: string;
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
  