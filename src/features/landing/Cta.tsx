import { Button, Card, Text, Title } from '@tremor/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BiBoltCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

function Cta() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <MotionCard
      initial={{ opacity: 0, y: '100%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      className="bg-transparent text-center"
    >
      <Title className="mb-2 md:text-2xl">{t('cta-heading')}</Title>
      <Text className="mx-auto mb-4 max-w-md">{t('cta-subheading')}</Text>
      <Button icon={BiBoltCircle} onClick={() => navigate('/login')}>
        {t('get-started')}
      </Button>
    </MotionCard>
  );
}

export default Cta;
