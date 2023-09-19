import {
  BarList,
  Bold,
  Card,
  DateRangePickerValue,
  Flex,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
} from '@tremor/react';
import { useCategoryOverview } from './useCategoryOverview';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import OverviewSkeleton from './OverviewSkeleton';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../utils/helpers';
import { useUser } from '../auth/useUser';

function Overview({ dateRange }: { dateRange: DateRangePickerValue }) {
  const { user } = useUser();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation();

  const selected = selectedIndex === 0 ? 'expenses' : 'incomes';

  const { data, isLoading } = useCategoryOverview({
    type: selected,
    dateRange,
  });

  return (
    <Card>
      <Title>{t('overview')}</Title>
      <Text>{t('category')}</Text>

      {isLoading ? (
        <OverviewSkeleton />
      ) : (
        <>
          <TabGroup
            index={selectedIndex}
            onIndexChange={setSelectedIndex}
            className="mt-6"
          >
            <TabList>
              <Tab value="expenses" icon={FaArrowUp}>
                {t('expenses')}
              </Tab>
              <Tab value="incomes" icon={FaArrowDown}>
                {t('incomes')}
              </Tab>
            </TabList>
          </TabGroup>
          <Flex className="mt-6">
            <Text>
              <Bold>{t('category')}</Bold>
            </Text>
            <Text>
              <Bold>{t('total')}</Bold>
            </Text>
          </Flex>
          <BarList
            data={data?.[selected] ?? []}
            showAnimation={false}
            className="mt-4"
            valueFormatter={value =>
              formatCurrency(value, user?.user_metadata.currency)
            }
          />
        </>
      )}
    </Card>
  );
}

export default Overview;
