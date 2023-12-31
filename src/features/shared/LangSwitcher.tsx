import { useTranslation } from 'react-i18next';
import Dropdown from '../../ui/Dropdown';
import { Button } from '@tremor/react';
import { useEffect } from 'react';

const SUPPORTED_LANGS = [
  {
    key: 'en',
    flag: '/en.svg',
  },
  {
    key: 'fr',
    flag: '/fr.svg',
  },
];

function LangSwitcher({ dashboard = false }: { dashboard?: boolean }) {
  const { i18n } = useTranslation();

  const currentLang =
    SUPPORTED_LANGS.find(lang => lang.key === i18n.language) ??
    SUPPORTED_LANGS[0];

  // Preload lang flag
  useEffect(() => {
    SUPPORTED_LANGS.forEach(lang => {
      const img = new Image();
      img.src = lang.flag;
    });
  }, []);

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button
          size="xs"
          color="gray"
          variant={dashboard ? 'light' : 'secondary'}
          className="transition-colors"
        >
          <div className="flex gap-1">
            <img src={currentLang.flag} alt={currentLang.key} className="w-4" />
            <span>{currentLang.key}</span>
          </div>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {SUPPORTED_LANGS.map(lang => (
          <Dropdown.Item key={lang.key}>
            <button
              className="flex   w-full items-center gap-1 px-2 py-1"
              onClick={() => i18n.changeLanguage(lang.key)}
            >
              <img src={lang.flag} alt="en" className="w-4" />
              <span>{lang.key}</span>
            </button>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LangSwitcher;
