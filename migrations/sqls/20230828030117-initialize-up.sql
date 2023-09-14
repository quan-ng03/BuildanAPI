/* Replace with your SQL commands */
-- Table: public.recipes

-- DROP TABLE IF EXISTS public.recipes;

CREATE TABLE IF NOT EXISTS public.recipes
(
    id bigint NOT NULL DEFAULT nextval('"Recipe Table_id_seq"'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    servings integer,
    yield text COLLATE pg_catalog."default",
    ingredients character varying COLLATE pg_catalog."default",
    instructions character varying COLLATE pg_catalog."default",
    ratings double precision,
    "linkURL" character varying COLLATE pg_catalog."default",
    "cuisineType" character varying COLLATE pg_catalog."default",
    nutrition character varying COLLATE pg_catalog."default",
    "imgURL" character varying COLLATE pg_catalog."default",
    "cookTime" character varying COLLATE pg_catalog."default",
    "prepTime" character varying COLLATE pg_catalog."default",
    "totalTime" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Recipe Table_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.recipes
    OWNER to postgres;