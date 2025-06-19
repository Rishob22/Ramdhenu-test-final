import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';
export const client=sanityClient({
  projectId:'3e1n5smz',
  dataset:'production',
   apiVersion:'2024-11-08',
   useCdn:true,
})
const builder=imageUrlBuilder(client);
export const urlFor =(source)=>{
   return builder.image(source);
}