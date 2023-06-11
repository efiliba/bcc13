import { ImageCard } from '@/components';

export const LearnMoreOptions = ({ options }) =>
  <div className="learn-more-options">
    <div className="learn-more-options__container">
      {options.map(({ image, title, description, link }, index) =>
        <ImageCard key={index} image={image} title={title} description={description} link={link} />
      )}
    </div>
  </div>;
