import { Text } from '@tremor/react';
import Logo from '../../ui/Logo';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-20 p-4 text-center">
      <Logo className="mx-auto h-10 w-10" />
      <Text className="mt-4">{t('copyright')}</Text>

      <ul className="mt-4 flex items-center justify-center gap-4 text-gray-600">
        <li>
          <a href="#">{t('policy')}</a>
        </li>
        <li>
          <a href="#">{t('terms-of-services')}</a>
        </li>
        <li>
          <a href="#">{t('contact-us')}</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
