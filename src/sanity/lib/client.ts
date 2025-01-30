
// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId:"9khvxqrm",
//   dataset:"production",
//   apiVersion:'2025-01-20',
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
import { createClient } from 'next-sanity'

// Access environment variables from .env file
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9khvxqrm",  // Public project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",    // Public dataset
  apiVersion: '2025-01-20',  // Hardcoded API version or use dynamic one
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_AUTH_TOKEN,  // Private token (only used server-side)
})
