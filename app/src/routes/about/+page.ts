import type { PageLoad } from './$types';
import { createClient } from '@crystallize/js-api-client';





export const load = (async () => {

    const CrystallizeClient = createClient({
        tenantIdentifier: 'bunny-rabbits',
    });

    const bunnies = await CrystallizeClient.catalogueApi(`query{  
        catalogue(language: "en", path: "/") {
            children{
            name
            createdAt
            type
            path
            children {
                name
            }
            }
        }
    
        }`);
    

    return {
        bunnies
    };
}) satisfies PageLoad;