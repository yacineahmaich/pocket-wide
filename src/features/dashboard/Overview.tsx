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

function Overview({ dateRange }: { dateRange: DateRangePickerValue }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = selectedIndex === 0 ? 'expenses' : 'incomes';

  const { data, isLoading } = useCategoryOverview({
    type: selected,
    dateRange,
  });

  return (
    <Card>
      <Title>Overview</Title>
      <Text>Category</Text>

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
                Expenses
              </Tab>
              <Tab value="incomes" icon={FaArrowDown}>
                Incomes
              </Tab>
            </TabList>
          </TabGroup>
          <Flex className="mt-6">
            <Text>
              <Bold>Category</Bold>
            </Text>
            <Text>
              <Bold>Total</Bold>
            </Text>
          </Flex>
          <BarList
            // eslint-disable-next-line
            //@ts-ignore
            data={data ? data?.[selected] : []}
            showAnimation={false}
            className="mt-4"
          />
        </>
      )}
    </Card>
  );
}

export default Overview;
