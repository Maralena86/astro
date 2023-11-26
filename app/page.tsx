'use client';

import sha256 from 'crypto-js/sha256';
import { useState } from 'react';
import VideoYoutube from './components/Video-youtube';
import videos from './lib/videos.json';
import Login from './components/Login';
export default function Page() {
  const [access, setAccess] = useState(false);

  return (
    <main className="flex min-h-screen flex-col p-6">
      {access ? (
        <div>
          <h1 className="text-center text-white uppercase p-4">Videos</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {videos.map((video) => (
              <VideoYoutube
                key={video.name}
                name={video.name}
                linky={video.link}
              />
            ))}
          </div>
        </div>
      ) : (
        <Login setAccess={setAccess} />
      )}
    </main>
  );
}
