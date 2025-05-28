import React from 'react';
import './PackageCard.scss';
import usePackageCard from './usePackageCard';

export interface PackageCardProps {
  name: string;
  description: string;
  technologies: string[];
  installCommand: string;
  links: {
    github?: string;
    npm?: string;
    docs?: string;
  };
}

const PackageCard = ({
  name,
  description,
  technologies,
  installCommand,
  links,
}: PackageCardProps) => {
    const { copyToClipboard } = usePackageCard();

  return (
    <div className="package-card">
      <div className="package-card__header">
        <h3 className="package-card__name">{name}</h3>
        <p className="package-card__description">{description}</p>
      </div>
      
      <div className="package-card__tech">
        {technologies.map((tech, index) => (
          <span key={index} className="package-card__tech-item">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="package-card__install">
        <code>{installCommand}</code>
        <button 
          className="package-card__copy-btn" 
          onClick={() => copyToClipboard(installCommand)}
          aria-label="Copy to clipboard"
        >
          copy
        </button>
      </div>
      
      <div className="package-card__links">
        {links.github && (
          <a 
            href={links.github} 
            className="package-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {links.npm && (
          <a  
            href={links.npm} 
            className="package-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM
          </a>
        )}
        {links.docs && (
          <a 
            href={links.docs} 
            className="package-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
        )}
      </div>
    </div>
  );
};

export default PackageCard; 