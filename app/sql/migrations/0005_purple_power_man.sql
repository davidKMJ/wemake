ALTER TABLE "notifications" ALTER COLUMN "type" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."notifications_types";--> statement-breakpoint
CREATE TYPE "public"."notifications_types" AS ENUM('follow', 'review', 'reply');--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "type" SET DATA TYPE "public"."notifications_types" USING "type"::"public"."notifications_types";--> statement-breakpoint
ALTER TABLE "follows" ALTER COLUMN "follower_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "follows" ALTER COLUMN "following_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "notifications" ADD COLUMN "seen" boolean DEFAULT false NOT NULL;