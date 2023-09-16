import { Title, Text } from '@tremor/react';
import SectionLayout from '../../layouts/SectionLayout';

const content = [
  {
    imgPath: '/monthly-performance-dashboard.png',
    heading: 'Monthly Performance Dashboard',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione sunt ea doloremque officia quae minus non, fugiat rem at illum aliquid voluptatem? Magnam iste accusamus, natus impedit sunt obcaecati.',
  },
  {
    imgPath: '/tracking.png',
    heading: 'Track Expenses / incomes',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione sunt ea doloremque officia quae minus non, fugiat rem at illum aliquid voluptatem? Magnam iste accusamus, natus impedit sunt obcaecati.',
  },
  {
    imgPath: '/category-spending.png',
    heading: 'Category Spending',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione sunt ea doloremque officia quae minus non, fugiat rem at illum aliquid voluptatem? Magnam iste accusamus, natus impedit sunt obcaecati.',
  },
  {
    imgPath: '/currency-profile.png',
    heading: 'Currency conversion & profile',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione sunt ea doloremque officia quae minus non, fugiat rem at illum aliquid voluptatem? Magnam iste accusamus, natus impedit sunt obcaecati.',
  },
];

function Discover() {
  return (
    <SectionLayout title="Discover" subTitle="Journey into Financial Clarity">
      <div className="mt-10 flex flex-col gap-28">
        {content.map((item, idx) => (
          <div className="flex gap-20 justify-between">
            <img
              src={item.imgPath}
              width={400}
              className={`
              shadow-2xl ring-4 ring-gray-600 rounded-lg
              ${idx % 2 === 0 ? '-rotate-6' : 'rotate-6 order-2'}
              `}
            />
            <div>
              <Title className="mb-2">{item.heading}</Title>
              <Text>{item.text}</Text>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Discover;