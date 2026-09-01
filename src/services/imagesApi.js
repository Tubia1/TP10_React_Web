import axios from 'axios'

const WIKIMEDIA_URL = 'https://commons.wikimedia.org/w/api.php'

export async function getCarImage(make, model) {
  const response = await axios.get(WIKIMEDIA_URL, {
    params: {
      action: 'query', generator: 'search', gsrsearch: `${make} ${model} automobile`,
      gsrnamespace: 6, gsrlimit: 1, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: 640,
      format: 'json', origin: '*',
    },
  })

  const pages = Object.values(response.data.query?.pages || {})
  const image = pages[0]?.imageinfo?.[0]
  if (!image) return null

  return {
    url: image.thumburl || image.url,
    sourceUrl: image.descriptionurl,
    license: image.extmetadata?.LicenseShortName?.value || 'Wikimedia Commons',
  }
}
