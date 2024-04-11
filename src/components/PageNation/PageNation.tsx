import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './pageNation.module.scss'

type Page = {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  maxPage: number,
}

export default function PaginationRounded(props: Page) {
  const count = Math.ceil(props.maxPage / 5);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setPage(value);
  }

  return (
    <Stack
      className={styles.stack}
      spacing={2}
    >
      <Pagination count={count} onChange={handleChange} variant="outlined" shape="rounded" />
    </Stack>
  );
}