// disable automatic export
export {};

export type AppRssSource = {
  setUrl: (url: string) => undefined;
  getItems: (useCors: boolean | undefined) => Promise<Array<any>>;
  getFeedCharsetEncoding: (contentTypeHeader: any) => string;
}
