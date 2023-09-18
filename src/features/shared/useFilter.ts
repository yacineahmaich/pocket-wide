import { useSearchParams } from 'react-router-dom';

export const useFilter = <T extends string>(filterFields: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = filterFields.reduce(
    (acc, field) => {
      acc[field] = searchParams.get(field) || '';
      return acc;
    },
    {} as { [key in T]: string },
  );

  const setFilter = (filters: { [key in T]: string | undefined }) => {
    Object.entries(filters).map(([field, value]) => {
      if (!value) {
        searchParams.delete(field);
      } else {
        searchParams.set(field, value as string);
      }
    });

    searchParams.delete('page');

    setSearchParams(searchParams);
  };

  const clearFilter = () => {
    filterFields.map(field => searchParams.delete(field));
    setSearchParams(searchParams);
  };

  return {
    filter,
    setFilter,
    clearFilter,
  };
};
