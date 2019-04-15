import { Action } from 'libs/Cheburstore';

export type ACreator<T> = (args: T) => Action<T>;

export type ACreatorNull = () => Action<null>;
