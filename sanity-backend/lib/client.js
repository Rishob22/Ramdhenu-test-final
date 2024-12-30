import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client=sanityClient({
  projectId:'67lrbytr',
  dataset:'production',
   apiVersion:'2024-11-08',
   useCdn:true,
   token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
const builder=imageUrlBuilder(client);
export const urlFor =(source)=>{
   return builder.image(source);
}