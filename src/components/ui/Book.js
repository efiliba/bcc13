import { SplitImageContent } from './SplitImageContent';

export const Book = ({ pages }) =>
  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto px-3 py-24 md:py-32 grid gap-y-20 md:gap-y-8">
      {pages.map(({ image, heading, text, list }, index) =>
        <SplitImageContent
          key={index}
          className="items-center"
          imageClassName="border-8 border-gray-100"
          image={image}
          imageFirst={index % 2 !== 0}
        >
          <div className="pt-2">
            <h2 className="font-bold text-xl md:text-2xl">{heading}</h2>
            {text.map((paragraph, index) =>
              <p key={index} className="pt-3">{paragraph}</p>
            )}
            {list &&
              <ul>
                {list.map((item, index) =>
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                )}
              </ul>
            }
          </div>
        </SplitImageContent>
      )}
    </div>
  </div>;
