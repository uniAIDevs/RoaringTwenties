import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useAction, getArticles, createArticle } from 'wasp/client/operations';

const ArticlePage = () => {
  const { articleId } = useParams();
  const { data: articles, isLoading, error } = useQuery(getArticles);
  const createArticleFn = useAction(createArticle);
  const [newArticleTitle, setNewArticleTitle] = useState('');
  const [newArticleContent, setNewArticleContent] = useState('');
  const [newArticleImage, setNewArticleImage] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateArticle = () => {
    createArticleFn({ title: newArticleTitle, content: newArticleContent, image: newArticleImage });
    setNewArticleTitle('');
    setNewArticleContent('');
    setNewArticleImage('');
  };

  return (
    <div className='p-4'>
      <div>
        <input
          type='text'
          placeholder='Title'
          className='px-1 py-2 border rounded text-lg'
          value={newArticleTitle}
          onChange={(e) => setNewArticleTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Content'
          className='px-1 py-2 border rounded text-lg'
          value={newArticleContent}
          onChange={(e) => setNewArticleContent(e.target.value)}
        />
        <input
          type='text'
          placeholder='Image URL'
          className='px-1 py-2 border rounded text-lg'
          value={newArticleImage}
          onChange={(e) => setNewArticleImage(e.target.value)}
        />
        <button
          onClick={handleCreateArticle}
          className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
        >
          Create Article
        </button>
      </div>
      <div>
        {articles.map((article) => (
          <div
            key={article.id}
            className='py-2 px-2 flex items-center hover:bg-slate-100 gap-x-2 rounded'
          >
            <div>{article.title}</div>
            <div>{article.content}</div>
            <img src={article.image} alt={article.title} className='h-40 w-40' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlePage;