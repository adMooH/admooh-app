import IAdmoohContext from "../interfaces/IAdmoohContext";

export interface AdmoohAppProps {
  template: string;
  context: IAdmoohContext;
  data: any;
  onSetApp: (app: any) => void;
}

export default function AdmoohApp(props: AdmoohAppProps): JSX.Element;
