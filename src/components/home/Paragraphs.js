export const Paragraphs = ({data}) =>
  <div className="paragraphs">
  {
    data.map(({heading, paragraphs}, headingIndex) =>
      <div key={headingIndex}>
        <h2>{heading}</h2>
        {
          paragraphs.map((paragraphs, index) => <p key={`${headingIndex}_${index}`}>{paragraphs}</p>)
        }
      </div>
    )
  }
  </div>;
