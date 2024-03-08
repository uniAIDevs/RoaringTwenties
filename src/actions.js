import { HttpError } from 'wasp/server'

export const createArticle = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Article.create({
    data: {
      title: args.title,
      content: args.content,
      image: args.image,
      userId: context.user.id
    }
  });
}

export const createAd = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Ad.create({
    data: {
      title: args.title,
      content: args.content,
      image: args.image,
      userId: context.user.id
    }
  });
}

export const createCitation = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  const article = await context.entities.Article.findUnique({
    where: { id: args.articleId }
  });
  if (!article) { throw new HttpError(404, 'Article not found') };
  return context.entities.Citation.create({
    data: {
      source: args.source,
      mlaCitation: args.mlaCitation,
      article: { connect: { id: args.articleId } }
    }
  });
}