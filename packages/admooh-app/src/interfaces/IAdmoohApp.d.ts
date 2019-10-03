import IPrepareAppProps from './IPrepareAppProps';
import IGetAppProps from './IGetAppProps';

export interface IAdmoohApp {
  get: (props: IGetAppProps) => JSX.Element;
  prepare: (props: IPrepareAppProps) => Promise<boolean>;
}
