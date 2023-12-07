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

export async function getBanner(): Promise<Banner[]> {
	return await client.fetch(groq`*[_type == "banner"]`)
}

export async function getEmployees(): Promise<Employee[]> {
	return await client.fetch(groq`*[_type == "profile"]`)
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
	
export interface Employee {
	_type: 'profile';
	_createdAt:string;
	slug: Slug;
	firstName: string;
	lastName: string;
	email: string;
	position: string;
	profilePicture: ImageAsset;
	description?: PortableTextBlock[];

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

export interface Page {
	_type: 'page';
	_createdAt: string;
	title: string;
	bannerImage: ImageAsset;
	ingress: string;
	paragraphs: Paragraph[];
	additionalImages?: ImageAsset[];
  }
  
  interface Paragraph {
	text: string;
	images?: ImageAsset[];
  }


