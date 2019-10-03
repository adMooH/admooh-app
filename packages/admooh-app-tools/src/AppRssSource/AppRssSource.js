import X2JS from "x2js";
import fetch from 'node-fetch';

class AppRssSource {
    constructor(rssUrl = '') {
      this.rssUrl = rssUrl;
    }

    setUrl(rssUrl) {
      this.rssUrl = rssUrl;
    }

    async getItems(useCors = false){
      let charSet = "iso-8859-1";
      const requestUrl = useCors ? "https://cors-anywhere.herokuapp.com/" + this.rssUrl: this.rssUrl;
      const rssResponse = await fetch(requestUrl);

      charSet = this.getFeedCharsetEncoding(rssResponse.headers.get('content-type'));
      const responseBuffer = await rssResponse.arrayBuffer();

      const dec = new TextDecoder(charSet);
			const feedXml = dec.decode(responseBuffer);
			const x2js = new X2JS();
			const doc = x2js.xml2js(feedXml);
			return doc.rss.channel.item
    }

    getFeedCharsetEncoding(contentTypeHeader) {
      const regex = /(?<=charset=).*/gm;
      let match = regex.exec(contentTypeHeader);
      if (match) {
        return match[0];
      }
      return "iso-8859-1";
    }
}

export default AppRssSource;
