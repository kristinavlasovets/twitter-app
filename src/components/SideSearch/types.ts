import { Dispatch, FC, SetStateAction } from 'react';

export interface SideSearchProps<T> {
  placeholder: string;
  getData: (searchValue: string) => Promise<T[]>;
  Result: FC<T>;
  errorMessage: string;
}

export type SetState<TState> = Dispatch<SetStateAction<TState>>;
