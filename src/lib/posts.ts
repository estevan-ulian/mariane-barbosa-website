import client from "./apolloClient";
import {
    WP_GET_ALL_POSTS_FOR_HOME,
    WP_GET_ALL_POSTS_FOR_BLOG,
    WP_GET_POST_BY_SLUG,
    WP_GET_ALL_POSTS_SLUGS
} from "../data/constants";

export async function WPGetAllPostsForHome() {
    const { data } = await client.query({
        query: WP_GET_ALL_POSTS_FOR_HOME,
    })

    return { data };
}

export async function WPGetAllPostsForBlog() {
    const { data } = await client.query({
        query: WP_GET_ALL_POSTS_FOR_BLOG,
    })
    
    return { data };
}

export async function WPGetAllPostsSlugs() {
    const { data } = await client.query({
        query: WP_GET_ALL_POSTS_SLUGS
    })

    return { data }
}

export async function WPGetPostBySlug(context) {
    const slug = context.params.slug;
    const { data } = await client.query({
        query: WP_GET_POST_BY_SLUG,
        variables: { slug }
    })

    return { data };
}