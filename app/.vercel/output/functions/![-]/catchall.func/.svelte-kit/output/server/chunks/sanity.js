import { createClient } from "@sanity/client";
import groq from "groq";
const PUBLIC_SANITY_PROJECT_ID = "84mcj5o9";
const PUBLIC_SANITY_DATASET = "production";
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
  // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20"
  // date of setup
});
async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getPost(slug) {
  return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
    slug
  });
}
async function getPostPage(page) {
  return await client.fetch(groq`*[_type == "post" && slug.current == $page][0]`, { page });
}
async function getHomePage() {
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
async function getBanner() {
  return await client.fetch(groq`*[_type == "banner"][0]`);
}
async function getHero() {
  try {
    return await client.fetch(groq`*[_type == "hero"][0]`);
  } catch (error) {
    console.error("Error fetching sales team:", error);
    throw error;
  }
}
async function getEmployees() {
  return await client.fetch(groq`*[_type == "profile" && !(_id match "drafts.*")]`);
}
async function getSalesTeam() {
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
    console.error("Error fetching sales team:", error);
    throw error;
  }
}
async function getContactDetails() {
  try {
    return await client.fetch(groq`*[_type == "contactDetails"][0]`);
  } catch (error) {
    console.error("Error fetching contact details:", error);
    throw error;
  }
}
async function getForms() {
  try {
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
    console.error("Error fetching forms:", error);
    throw error;
  }
}
export {
  getBanner as a,
  getHero as b,
  getSalesTeam as c,
  getHomePage as d,
  getPostPage as e,
  getContactDetails as f,
  getPosts as g,
  getEmployees as h,
  client as i,
  getPost as j,
  getForms as k
};
