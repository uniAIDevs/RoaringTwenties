import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, getArticles, getAds } from 'wasp/client/operations';

const HomePage = () => {
  const { data: articles, isLoading: articlesLoading, error: articlesError } = useQuery(getArticles);
  const { data: ads, isLoading: adsLoading, error: adsError } = useQuery(getAds);

  if (articlesLoading || adsLoading) return 'Loading...';
  if (articlesError || adsError) return 'Error: ' + (articlesError || adsError);

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {articles.map((article) => (
        <Link key={article.id} to={`/article/${article.id}`}>
          <img src={article.image} className='rounded-lg' alt={article.title} />
        </Link>
      ))}
      {ads.map((ad) => (
        <Link key={ad.id} to={`/ad/${ad.id}`}>
          <img src={ad.image} className='rounded-lg' alt={ad.title} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;