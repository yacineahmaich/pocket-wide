import { useTranslation } from 'react-i18next';
import Dropdown from '../../ui/Dropdown';
import { Button } from '@tremor/react';

const flags = {
  en: 'https://flagicons.lipis.dev/flags/4x3/um.svg',
  fr: 'https://flagicons.lipis.dev/flags/4x3/fr.svg',
};

function LangSwitcher({ dashboard = false }: { dashboard?: boolean }) {
  const { i18n } = useTranslation();

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
            <img
              src={flags[i18n.language as keyof typeof flags]}
              alt={i18n.language}
              className="w-4"
            />
            <span>{i18n.language}</span>
          </div>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>
          <button
            className="flex   w-full items-center gap-1 px-2 py-1"
            onClick={() => i18n.changeLanguage('en')}
          >
            <img src={flags.en} alt="en" className="w-4" />
            <span>en</span>
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <button
            className="flex   w-full items-center gap-1 px-2 py-1"
            onClick={() => i18n.changeLanguage('fr')}
          >
            <img src={flags.fr} alt="fr" className="w-4" />
            <span>fr</span>
          </button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LangSwitcher;
