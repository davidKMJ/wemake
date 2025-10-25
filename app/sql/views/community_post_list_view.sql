DROP VIEW IF EXISTS community_post_list_view;

CREATE VIEW community_post_list_view AS
SELECT
    posts.post_id as postId,
    posts.title,
    posts.content,
    posts.created_at as createdAt,
    posts.topic_id as topicId,
    posts.profile_id as profileId,
    posts.upvotes as upvotes,
    topics.name as topicName,
    topics.slug as topicSlug,
    profiles.name as authorName,
    profiles.avatar as authorAvatar,
    COUNT(post_upvotes.post_id) as upvotes
FROM posts
INNER JOIN topics USING (topic_id)
INNER JOIN profiles USING (profile_id)
LEFT JOIN post_upvotes USING (post_id)
GROUP BY posts.post_id, topics.topic_id, profiles.profile_id
ORDER BY posts.created_at DESC;

SELECT * FROM community_post_list_view;