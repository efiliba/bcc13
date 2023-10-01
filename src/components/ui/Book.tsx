import { Container, SplitImageContent } from '@/components';

interface Props {
  pages: {
    image: string;
    heading: string;
    text: string[];
    list?: string[];
  }[];
}

export const Book = ({ pages }: Props) =>
  <Container contentClassName="grid gap-y-20 md:gap-y-8">
    {pages.map(({ image, heading, text, list }, index) =>
      <SplitImageContent
        key={index}
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
            <ul className="list-disc  pl-4">
              {list.map((item, index) =>
                <li key={index} className="pt-3">
                  {item}
                </li>
              )}
            </ul>
          }
        </div>
      </SplitImageContent>
    )}
  </Container>;
