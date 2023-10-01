import { Container, SplitImageContent, Card, CardContent } from '@/components';

export const Testimonials = ({ testimonials }) => {
  const { name, location, message } = testimonials[0];

  return (
    <Container className="bg-gray-50">
      <h1 className="md:hidden text-2xl md:text-4xl mb-5 text-center">What Our Customers Say</h1>
      <SplitImageContent className="gap-8" contentClassName="relative h-full" image="care-feedback.png" imageFirst>
        <Card className="md:absolute left-[-20%] top-1/2 md:translate-y-[-50%] p-12">
          <CardContent className="p-0">
            {message.map((text, index) =>
              <p key={index} className="text-xl italic pb-4">{text}</p>
            )}
            <h4 className="font-bold">{name}</h4>
            <p>{location}</p>
          </CardContent>
        </Card>
      </SplitImageContent>
    </Container>
  )
};
