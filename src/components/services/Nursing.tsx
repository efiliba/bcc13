import { Container, SplitContent, PreTitleDescription, AlternatingColorList } from '@/components';

import { nursingServices } from '@/services';

export const Nursing = () =>
  <Container className="bg-gray-100">
    <SplitContent>
      {{
        lhs:
          <PreTitleDescription
            preTitle="Nursing"
            title="Every Australian is entitled to the best care possible regardless of their location or medical condition"
            descriptions={[
              "Our nursing care is affectionate and kind, but most of all, reliable. We cater to individuals with a wide variety of needs and conditions. Whether it’s low care or high intensity support services, you’ll receive top-notch nursing services from a licensed and registered professional.",
              "Our nurses are extremely qualified and efficient. They deliver holistic support and liaise with your care team to ensure a personised approch to your care."
            ]}
          />,
        rhs:
          <div>
            <h3 className="font-bold text-2xl">Common services in nursing care include</h3>
            <AlternatingColorList list={nursingServices} />
          </div>
      }}
    </SplitContent>
  </Container>;
