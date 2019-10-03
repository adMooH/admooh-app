<div style="text-align:center"><img src="logo.png" /></div>

# adMooH App &middot; [![GitHub license](https://img.shields.io/npm/l/admooh-app)](https://raw.githubusercontent.com/adMooH/admooh-app/master/LICENSE) [![npm version](https://img.shields.io/npm/v/admooh-app)](https://www.npmjs.com/package/admooh-app)



## Installation

using npm:
```sh
npm install admooh-app
```

using yarn:
```sh
yarn add admooh-app
```

## Creating a adMooH App

Just need extends a **AppComponent** on class, its a similar to extends a **React.Component**. 
view more about [React]('https://reactjs.org/docs/getting-started.html').

```ts
import React from 'react';
import { AppComponent } from 'admooh-app';

export default class AwesomeApp extends AppComponent<TMyState> { 
    // your code
}
```

Thus, functions necessary for the functioning of the app in signage player will be implemented and properties will be inferred as:

```ts
interface AppComponentProps {
    context: IAdmoohContext;
    data: any;
    //...
}
```

Read more about adMooH Apps [here](https://github.com/adMooH/admooh-app-model/blob/master/README.md).


## adMooH Context

The adMooH context is an interface that provides the main functions used to integrate the app with the signage player:

|Function|Description|Return|
|-|-|-|
|**download**|Download file and save to local storage. |Local file path.|
|**setData**|Insert or update data in app local db with the key.|Operation success (true/false).|
|**getData**|Get data with the key.|Data saved or null.|
|**convertXml**|Convert XML to normalized JavaScrit Object, read more [x2js](https://github.com/x2js/x2js/blob/development/README.md).|Object|

```ts
interface IAdmoohContext {
  download: (fileUrl: string) => Promise<string | null>;
  setData:  <TData>(key: string, value: TData) => Promise<boolean>;
  getData:  <TData>(key: string) => Promise<TData | null>;
  convertXml: (xml: string) => Promise<object>;
};
```


## App Player

## App Pre?View

## Resources

* [ChangeLog](https://github.com/adMooH/admooh-app/blob/master/CHANGELOG.md)

## License
[MIT](https://raw.githubusercontent.com/adMooH/admooh-app/master/LICENSE) 
