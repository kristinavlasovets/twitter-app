import { FC } from 'react';

export interface SideSearchProps<T> {
  placeholder: string;
  getData: (searchValue: string) => Promise<T[]>;
  Result: FC<T>;
  errorMessage: string;
}
