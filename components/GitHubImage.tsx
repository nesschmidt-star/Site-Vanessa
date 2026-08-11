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

  // Folders to try on GitHub
  const folders = ["images/", "fotos/", "assets/", "img/", "public/", ""];
  const exts = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ""];

  // Generate candidate URLs across all folder structures and extensions
  const candidateUrls: string[] = [];

  folders.forEach(folder => {
    exts.forEach(ext => {
      candidateUrls.push(`${repoBase}${folder}${baseName}${ext}`);
    });
  });

  // Local fallbacks
  candidateUrls.push(`/${baseName}.jpeg`, `/${baseName}.jpg`, fallbackUrl);

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
