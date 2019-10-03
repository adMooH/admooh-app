import {IAdmoohContext} from '../interfaces/IAdmoohContext';
import IGetAppProps from '../interfaces/IGetAppProps';
import IPrepareAppProps from '../interfaces/IPrepareAppProps';

export interface AppPreviewProps {
  data: any;
  context: IAdmoohContext;
  setApp: (ref: React.Component) => undefined;
  getApp: (props: IGetAppProps) => Promise<boolean>;
  prepareApp: (props: IPrepareAppProps) => Promise<boolean>;
}

export default function AppPreview(props: AppPreviewProps): JSX.Element;
