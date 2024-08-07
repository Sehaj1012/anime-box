'use client';

import { useState, useEffect } from 'react';
import Layout from './components/layout';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const categories = [
    'bored', 'dance', 'facepalm', 'feed', 'handshake', 'happy', 'highfive', 'hug',
    'kick', 'laugh', 'lurk', 'nod', 'nom', 'nope', 'pat', 'peck', 'poke', 'pout',
    'punch', 'shoot', 'shrug', 'slap', 'sleep', 'smile', 'smug', 'stare', 'think',
    'thumbsup', 'tickle', 'wave', 'wink', 'yawn', 'yeet'
  ];

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    console.log('Fetching random image from category:', randomCategory);

    try {
      const response = await fetch(`https://nekos.best/api/v2/${randomCategory}`);
      const data = await response.json();
      const randomImageUrl = data.results[0].url;
      setImageUrl(randomImageUrl);
    } catch (error) {
      console.error('Error fetching the gif:', error);
    }
  };

  return (
    <Layout>
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold">Anime Box</h1>
        {imageUrl && <img src={imageUrl} alt="Random Image" className="mt-6 mx-auto" />}
        <button
          onClick={fetchRandomImage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get New GIF
        </button>
      </div>
    </Layout>
  );
}
