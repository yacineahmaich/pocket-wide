import { Title, Text } from '@tremor/react';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const transition = (n: number) => ({
  delay: 0.1 * n,
  duration: 0.4,
  type: 'spring',
  stiffness: 40,
});

function Discover() {
  const { t } = useTranslation();

  const content = [
    {
      imgPath: '/images/monthly-performance-dashboard.png',
      heading: t('monthly-performance-dashboard'),
      text: t('monthly-performance-dashboard-text'),
    },
    {
      imgPath: '/images/tracking.png',
      heading: t('track-expenses-incomes'),
      text: t('track-expenses-incomes-text'),
    },
    {
      imgPath: '/images/category-spending.png',
      heading: t('category-spending'),
      text: t('category-spending-text'),
    },
    {
      imgPath: '/images/currency-profile.png',
      heading: t('currency-conversion'),
      text: t('currency-conversion-text'),
    },
  ];

  return (
    <SectionLayout title={t('discover')} subTitle={t('discover-subheading')}>
      <div className="mt-10 flex flex-col gap-28">
        {content.map((item, idx) => (
          <div
            key={item.heading}
            className="flex flex-col justify-between gap-20 md:flex-row"
          >
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: (idx + 1) % 2 === 0 ? -6 : 6,
              }}
              transition={transition(idx + 1)}
              viewport={{ once: true }}
              src={item.imgPath}
              width={400}
              className={`
              rounded-lg bg-gray-50 shadow-2xl ring-4 ring-gray-600
              ${idx % 2 === 0 ? '-rotate-6' : 'rotate-6 md:order-2'}
              `}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition(idx + 1)}
              viewport={{ once: true }}
            >
              <Title className="mb-2">{item.heading}</Title>
              <Text>{item.text}</Text>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Discover;
