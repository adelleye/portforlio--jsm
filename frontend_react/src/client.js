import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
  //projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: "zxzggq90",
  dataset: "production",
  apiVersion: "2022-02-25",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  //token:
  // "skkyOHjBeATKTB6J2BZe6i4etsMPQl7sJwM3EJaaFnwuek9CvKMZCyoRia1BQzwVNSgl6rxraTpZKs6XmQk05JDrbh1MjTGjeeVdXRtQuln1Ut9NOVtmc2fh7E3iWwwtiFNHX2NtfSvuqdVGGUS2z3Xuwu2n4EOS0LqDzxKGxQuVYn8F3AAt",
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
