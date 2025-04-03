import { createReducer } from '@ngrx/store';
import { UsersRecords } from './users-records';

export const initState: ReadonlyArray<UsersRecords> =[{
  searchInput: ''
}]

export const usersReducer = createReducer(
  initState
)