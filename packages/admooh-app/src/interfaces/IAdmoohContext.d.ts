export default interface IAdmoohContext {
  getDeviceInfo: () => any;
  download: (fileUrl: string) => Promise<string | null>;
  downloadXml: (dataUrl: string) => Promise<string | null>;
  setData: <TData>(key: string, value: TData) => Promise<boolean>;
  getData: <TData>(key: string) => Promise<TData | null>;
  convertXml: (xml: string) => Promise<object | null>;
}
