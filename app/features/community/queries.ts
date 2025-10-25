// import { count, desc, eq } from "drizzle-orm";
// import { posts, postUpvotes, topics } from "./schema";
// import db from "~/db";
// import { profiles } from "../users/schema";

import client from "~/supa-client";

// export const getTopics = async () => {
//     const allTopics = await db
//         .select({
//             topicId: topics.topic_id,
//             name: topics.name,
//             slug: topics.slug,
//         })
//         .from(topics);
//     return allTopics;
// };

// export const getPosts = async () => {
//     const allPosts = await db.select({
//         postId: posts.post_id,
//         title: posts.title,
//         content: posts.content,
//         createdAt: posts.created_at,
//         topicName: topics.name,
//         authorName: profiles.name,
//         authorAvatar: profiles.avatar,
//         upvotes: count(postUpvotes.post_id),
//     }).from(posts)
//     .innerJoin(topics, eq(posts.topic_id, topics.topic_id))
//     .innerJoin(profiles, eq(posts.profile_id, profiles.profile_id))
//     .leftJoin(postUpvotes, eq(posts.post_id, postUpvotes.post_id))
//     .groupBy(posts.post_id, topics.topic_id, profiles.profile_id)
//     .orderBy(desc(posts.created_at));

//     return allPosts;
// }

export const getTopics = async () => {
    const { data, error } = await client.from("topics").select(
        "topicId: topic_id, name, slug",
    );
    if (error) throw new Error(error.message);
    return data;
};

// export const getPosts = async () => {
//     const { data, error } = await client.from("posts").select(`
//         postId: post_id,
//         title,
//         content,
//         createdAt: created_at,
//         topics!inner (
//             name,
//             slug
//         ),
//         author: profiles!posts_profile_id_profiles_profile_id_fk!inner (
//             name,
//             avatar
//         ),
//         upvotes: post_upvotes (
//             count
//         )
//     `);
//     if (error) throw new Error(error.message);
//     return data;
// };

export const getPosts = async () => {
    const { data, error } = await client.from("community_post_list_view")
        .select("*");
    if (error) throw new Error(error.message);
    return data;
};
