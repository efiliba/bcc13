// import classNames from 'classnames';

export const SplitContent = ({ contentClassName, children }) =>
  // <div className={classNames('split-content', { [`${contentClassName}`]: contentClassName })}>
  <div className="grid md:grid-cols-2 gap-8 items-center text-left">
    {children.lhs}
    {children.rhs}
  </div>;

// @import "../../app/variables";

// .split-content {
//   display: grid;
//   align-items: center;
//   row-gap: 3.5rem;
//   text-align: center;
//   text-align: left;

//   @include breakpoint(sm) {
//     grid-template-columns: 1fr 1fr;
//     column-gap: 3rem;
//   }
// }
