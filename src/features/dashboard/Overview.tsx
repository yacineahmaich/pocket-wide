import {
  BarList,
  Bold,
  Card,
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

function Overview() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = selectedIndex === 0 ? 'expenses' : 'incomes';

  const { data, isLoading } = useCategoryOverview();

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
            data={data ? data?.[selectedCategory] : []}
            showAnimation={false}
            className="mt-4"
          />
        </>
      )}
    </Card>
  );
}

export default Overview;
