export const fetchData = async(endpoint) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/${endpoint}`)
      const data = await response.json()
      return data;
    } catch (err) {
      console.warn('Erro: ', err)
    }
  }

export const fetchMedia = async(id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/media/${id}`)
    const data = await response.json()
    return data;
  } catch (err) {
    console.warn('Erro: ', err)
  }
}