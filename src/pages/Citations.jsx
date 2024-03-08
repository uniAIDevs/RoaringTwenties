import React from 'react';
import { useQuery, useAction, getCitations, createCitation } from 'wasp/client/operations';
import { Link } from 'react-router-dom';

const CitationsPage = () => {
  const { data: citations, isLoading, error } = useQuery(getCitations, { articleId: 123 });
  const createCitationFn = useAction(createCitation);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateCitation = () => {
    createCitationFn({
      source: 'Example Source',
      mlaCitation: 'Example Citation',
      articleId: 123
    });
  };

  return (
    <div className='p-4'>
      <button
        onClick={handleCreateCitation}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Citation
      </button>
      <div>
        {citations.map((citation) => (
          <div key={citation.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{citation.source}</div>
            <div>{citation.mlaCitation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitationsPage;