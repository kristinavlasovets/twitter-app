import { Dispatch, SetStateAction } from 'react';

import { ICreator, ITweetBySearch } from '@/types';

export interface SideSearchProps {
  placeholder: string;
  getData: (searchValue: string) => Promise<ICreator[] | ITweetBySearch[]>;
  errorMessage: string;
}

export type SetState<TState> = Dispatch<SetStateAction<TState>>;
