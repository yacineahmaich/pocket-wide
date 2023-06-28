import { Button } from '@tremor/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/config';

type Props = { count: number };

function Pagination({ count }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  // get current page
  const currentPage = Number(searchParams.get('page')) || 1;

  // check if last page
  const hasMore = currentPage < Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    if (!hasMore) return;
    const page = currentPage + 1;
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const page = currentPage > 1 ? currentPage - 1 : 1;
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <Button
        size="xs"
        color="blue"
        variant="secondary"
        icon={FaAngleLeft}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <Button
        size="xs"
        color="blue"
        variant="secondary"
        icon={FaAngleRight}
        iconPosition="right"
        onClick={nextPage}
        disabled={!hasMore}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
