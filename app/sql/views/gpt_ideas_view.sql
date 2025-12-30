DROP VIEW gpt_ideas_view;

CREATE VIEW gpt_ideas_view AS
SELECT
  gpt_ideas.gpt_idea_id,
  gpt_ideas.views,
  CASE WHEN gpt_ideas.claimed_at IS NULL THEN gpt_ideas.idea ELSE repeat('X', LENGTH(gpt_ideas.idea)) END AS idea,
  COUNT(gpt_ideas_likes.gpt_idea_id) AS likes,
  gpt_ideas.created_at,
  gpt_ideas.claimed_at
FROM public.gpt_ideas
LEFT JOIN public.gpt_ideas_likes USING (gpt_idea_id)
GROUP BY gpt_ideas.gpt_idea_id;