export const AlternatingColorList = ({ list }) =>
  <div>
    {list.map((row, index) =>
      <p key={index} className={`mt-4 px-10 py-4 ${index % 2 === 0 ? 'text-primary bg-primary-100' : 'text-secondary bg-secondary-100'}`}>       
        {row}
      </p>
    )}
  </div>;
