import classNames from 'classnames';

import './split-content.scss';

export const SplitContent = ({ contentClassName, children }) =>
  <div className={classNames('split-content', { [`${contentClassName}`]: contentClassName })}>
    {children.lhs}
    {children.rhs}
  </div>;
