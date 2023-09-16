import { Card, Icon, Text, Title } from '@tremor/react';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { BsClipboardCheck, BsCurrencyExchange } from 'react-icons/bs';
import { TbPigMoney } from 'react-icons/tb';
import SectionLayout from '../../layouts/SectionLayout';

const features = [
  {
    heading: 'Expense Tracking',
    text: 'Stay in control of your spending with our intuitive expense tracking tools. Easily categorize and monitor your expenses, making it simple to identify where your money is going.',
    icon: BsClipboardCheck,
  },
  {
    heading: 'Income Management',
    text: 'Track and manage your income sources efficiently. Keep a close eye on your earnings and gain insights into your cash flow.',
    icon: TbPigMoney,
  },
  {
    heading: 'Currency Conversion',
    text: 'Manage finances across borders with ease. Convert currencies and keep track of expenses in multiple currencies effortlessly.',
    icon: BsCurrencyExchange,
  },
  {
    heading: 'Category Spending Insights',
    text: 'Gain deeper insights into your spending habits with our Category Spending Insights feature.',
    icon: BiSolidCategoryAlt,
  },
];

function Features() {
  return (
    <SectionLayout
      title="Features"
      subTitle="Unlock the Power of Financial Management"
    >
      <div className="grid grid-cols-2 gap-8">
        {features.map(feature => (
          <Card key={feature.heading} className="bg-transparent">
            <Icon icon={feature.icon} color="blue" size="lg" />
            <Title className="mb-2">{feature.heading}</Title>
            <Text>{feature.text}</Text>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Features;
