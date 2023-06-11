import { Typography } from '@mui/material';

import { SplitImageContent } from './SplitImageContent';

import './book.scss';

export const Book = ({ pages }) =>
  <div className="book">
    <div className="book__container">
      {pages.map(({ image, heading, text, list }, index) =>
        <div key={index}>
        <SplitImageContent imageClassName="book-page__image" image={image} imageFirst={index % 2 !== 0}>
          <div className="book-page__content">
            <Typography variant="h2">{heading}</Typography>
            {text.map((paragraph, index) =>
              <Typography key={index} className="paragraph" variant="body2">{paragraph}</Typography>
            )}
            {list &&
              <ul>
                {list.map((item, index) =>
                  <li key={index}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                )}
              </ul>
            }
          </div>
        </SplitImageContent>
        </div>
      )}
    </div>
  </div>;
