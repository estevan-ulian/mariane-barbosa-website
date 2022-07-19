import { fetchData } from "../../utils/fetchData";

export const getAllPosts = fetchData('posts')

export async function getPost(slug) {
    const posts = await getAllPosts;
    const postArray = posts.filter(post => post.slug == slug)
    const post = postArray.length > 0 ? postArray[0] : null;
    return post
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
      case 'posts':
        elements = await getAllPosts;
        break;
    }
    const elementsIds = elements.map(element => {
      return {
        params: {
          slug: element.slug,
        },
      };
    });
    return elementsIds;
}


export const getAllMedia = fetchData('media')

export const getAllCategories = fetchData('categories')

export const getAllTags = fetchData('tags')
