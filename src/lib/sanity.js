import { createClient } from "@sanity/client"
import { createImageUrlBuilder } from "@sanity/image-url"

export const client = createClient({
  projectId: "r1va8pan",
  dataset: "production",
  apiVersion: "2026-11-22",
  useCdn: true,
})
const builder = createImageUrlBuilder(client)

const heroQuery = `*[_type == "hero"][0]{
    headingTextOne,
    headingTextTwo,
    subheading,
    buttonText,
    heroImage,
  }`

export function urlFor(source) {
  return builder.image(source)
}

export async function getHeroContent() {
  const data = await client.fetch(heroQuery)
  return data
}
