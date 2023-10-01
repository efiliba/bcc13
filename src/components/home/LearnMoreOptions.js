import { ImageCard } from '@/components';

// interface Props {
//   options: {
//     image: string;
//     title: string;
//     description: string;
//     link: string;
//   }[];
// }

export const LearnMoreOptions = ({ options }) =>
  <div className="learn-more-options">
    <div className="learn-more-options__container">
      {options.map(({ image, title, description, link }, index) =>
        <ImageCard key={index} image={image} title={title} description={description} link={link} />
      )}
    </div>
  </div>;

// .learn-more-options {
//   padding-top: 5rem;
//   padding-bottom: 8rem;
//   background-color: $white;

//   @include breakpoint(sm) {
//     padding-top: 12rem;
//     padding-bottom: 12rem;
//   }
  
//   &__container {
//     @include content-layout();

//     grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
//     gap: 2rem 2.5rem;

//     img {
//       aspect-ratio: 1.5;
//     }
//   }
// }
