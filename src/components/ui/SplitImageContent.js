import classNames from 'classnames';

import './split-image-content.scss';

export const SplitImageContent = ({ imageClassName, contentClassName, image, imageFirst, children }) =>
  <div className={classNames('split-image-content', { 'image-first': imageFirst })}>
    <img
      className={classNames('split-image-content__image', { [`${imageClassName}`]: imageClassName })}
      src={`/images/${image}`}
      alt={image}
    />
    <div className={classNames('split-image-content__content', { [`${contentClassName}`]: contentClassName })}>
      {children}
    </div>
  </div>;
