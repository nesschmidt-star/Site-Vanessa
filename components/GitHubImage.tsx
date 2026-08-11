import React, { useState } from 'react';

interface GitHubImageProps {
  baseName: string; // e.g. "vanessanutri" or "vanessanutri1"
  alt: string;
  className?: string;
  fallbackUrl?: string;
}

export const GitHubImage: React.FC<GitHubImageProps> = ({
  baseName,
  alt,
  className = "w-full h-full object-cover",
  fallbackUrl = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
}) => {
  const repoBase = "https://raw.githubusercontent.com/nesschmidt-star/Site-Vanessa/main/";

  // Prioritized extensions to test
  const candidateUrls = [
    `${repoBase}${baseName}.jpg`,
    `${repoBase}${baseName}.jpeg`,
    `${repoBase}${baseName}.png`,
    `${repoBase}${baseName}.webp`,
    `${repoBase}${baseName}.JPG`,
    `${repoBase}${baseName}.JPEG`,
    `${repoBase}${baseName}.PNG`,
    `${repoBase}${baseName}`,
    `/${baseName}.jpeg`,
    `/${baseName}.jpg`,
    fallbackUrl
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleError = () => {
    if (currentIndex < candidateUrls.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={candidateUrls[currentIndex]}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
};

export default GitHubImage;
