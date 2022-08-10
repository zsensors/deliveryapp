import  sanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url/";
import {PROJECT_ID} from "@env"




const client = sanityClient({
    projectId: PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;