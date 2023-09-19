import { Card, Icon, Text, Title } from '@tremor/react';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { BsClipboardCheck, BsCurrencyExchange } from 'react-icons/bs';
import { TbPigMoney } from 'react-icons/tb';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionCard = motion(Card);

function Features() {
  const { t } = useTranslation();

  const features = [
    {
      heading: t('feature-expense'),
      text: t('feature-expense-text'),
      icon: BsClipboardCheck,
    },
    {
      heading: t('feature-income'),
      text: t('feature-income-text'),
      icon: TbPigMoney,
    },
    {
      heading: t('feature-currency'),
      text: t('feature-currency-text'),
      icon: BsCurrencyExchange,
    },
    {
      heading: t('feature-category'),
      text: t('feature-category-text'),
      icon: BiSolidCategoryAlt,
    },
  ];

  return (
    <SectionLayout title={t('features')} subTitle={t('features-subheading')}>
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
