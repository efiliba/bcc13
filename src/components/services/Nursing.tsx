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
              "Our nursing care is affectionate and kind, but most of all, reliable. We cater to individuals with a wide variety of needs and conditions. We provide complex high intensity support services in the community and provide a smooth hospital to home transition.",
              "Our nurses are extremely qualified and efficient. They deliver holistic support and liaise with your care team to ensure a personalised approach to your care."
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
