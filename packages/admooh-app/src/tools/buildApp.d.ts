import { IGetAppProps } from '../interfaces/IGetAppProps';
import { IPrepareAppProps } from '..';

export function buildApp(
  app: React.ComponentType<IGetAppProps>,
  prepare: (props: IPrepareAppProps) => Promise<boolean>,
): undefined;
