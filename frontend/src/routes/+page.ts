import type { PageLoad } from './$types';
import { page } from "$app/stores";

// let topic_name = page.url.searchParams.get("topic_name") ?? "something interesting";


export const load: PageLoad = async ({ fetch, params,url }) => {
    console.log("Topic name--->",url.searchParams.get("topic_name"));
    const res = await fetch(`http://localhost:8000/api/v1/skill/`);
    const item = await res.json();

    return { item };
};