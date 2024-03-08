import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, getArticles } from 'wasp/client/operations';

const TableOfContentsPage = () => {
  const { data: articles, isLoading, error } = useQuery(getArticles);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {articles.map((article) => (
        <div key={article.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
          <h2 className='text-xl font-bold'>{article.title}</h2>
          <p>{article.content}</p>
          <img src={article.image} alt={article.title} className='my-2' />
          <Link to={`/article/${article.id}`} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default TableOfContentsPage;