import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useAction, getAds } from 'wasp/client/operations';

const AdPage = () => {
  const { adId } = useParams();
  const { data: ad, isLoading, error } = useQuery(getAds, { adId });

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h2>{ad.title}</h2>
      <p>{ad.content}</p>
      <img src={ad.image} alt={ad.title} />
      {/* Add editing functionality here */}
    </div>
  );
}

export default AdPage;