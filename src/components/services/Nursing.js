import { SplitContent, AlternatingColorList } from '@/components';

import { nursingServices } from '@/services';

export const Nursing = () =>
  <div className="py-28 md:py-20 bg-gray-200">
    <div className="max-w-screen-xl mx-auto">
      <SplitContent>
        {{
          lhs:
            <div>
              <div className="pb-4 text-2xl md:text-3xl text-secondary">Nursing</div>
              <h1 className="text-3xl font-bold">Every Australian is entitled to the best care possible regardless of their location or medical condition</h1>
              <div variant="body2">
                Our nursing care is affectionate and kind, but most of all, reliable. We cater to individuals with a wide variety of needs and conditions. Whether it’s low care or high
                intensity support services, you’ll receive top-notch nursing services from a licensed and registered professional.
              </div>
              <div variant="body2">
                Our nurses are extremely qualified and efficient. They deliver holistic support and liaise with your care team to ensure a personised approch to your care.
              </div>
            </div>,
          rhs:
            <div>
              <h3 className="text-2xl font-bold">Common services in nursing care include</h3>
              <AlternatingColorList list={nursingServices} />
            </div>
        }}
      </SplitContent>
    </div>
  </div>;