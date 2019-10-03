import {IAdmoohContext} from '../interfaces/IAdmoohContext';

export interface AppComponentProps {
   context: IAdmoohContext;
   data: any;
   setApp: (ref: React.Component | undefined) => undefined;
 }

export default function AppComponent(props: AppComponentProps): JSX.Element;
