import { HttpError } from 'wasp/server'

export const getArticles = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Article.findMany({
    where: {
      userId: context.user.id
    }
  });
}

export const getAds = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Ad.findMany({
    where: { userId: context.user.id }
  });
}

export const getCitations = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Citation.findMany({
    where: {
      articleId: args.articleId
    }
  });
}