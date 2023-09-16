import { Title, Text } from '@tremor/react';

type Props = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};

function SectionLayout({ title, subTitle, children }: Props) {
  return (
    <div className="flex flex-col items-center pb-32 max-w-4xl mx-auto">
      <Title className="text-xl">{title}</Title>
      <Text className="mt-2">{subTitle}</Text>
      <div className="mt-10">{children}</div>
    </div>
  );
}

export default SectionLayout;
