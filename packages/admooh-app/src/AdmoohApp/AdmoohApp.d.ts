import IAdmoohContext from "../interfaces/IAdmoohContext";

export interface AdmoohAppProps {
  template: string;
  context: IAdmoohContext;
  data: any;
}

export default function AdmoohApp(props: AdmoohAppProps): JSX.Element;
