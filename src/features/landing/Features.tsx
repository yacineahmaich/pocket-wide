import { Card, Icon, Text, Title } from '@tremor/react';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { BsClipboardCheck, BsCurrencyExchange } from 'react-icons/bs';
import { TbPigMoney } from 'react-icons/tb';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

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
      <div className="grid gap-8 md:grid-cols-2">
        {features.map((feature, idx) => (
          <MotionCard
            key={feature.heading}
            initial={{ opacity: 0, x: (idx + 1) % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1 * (idx + 1),
              duration: 0.4,
              type: 'spring',
              stiffness: 70,
            }}
            viewport={{ once: true }}
            className="bg-transparent"
          >
            <Icon icon={feature.icon} color="blue" size="lg" />
            <Title className="mb-2">{feature.heading}</Title>
            <Text>{feature.text}</Text>
          </MotionCard>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Features;
