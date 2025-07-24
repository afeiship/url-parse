
import urlParseOrg from 'url-parse';

// https://url.spec.whatwg.org/#default-port
// type Protocol = 'http' | 'https' | 'ws' | 'wss' | 'ftp' | 'gopher' | 'file';

type URLParsed = {
  slashes: boolean;
  protocol: string;
  hash: string;
  query: string;
  pathname: string;
  auth: string;
  host: string;
  port: string;
  hostname: string;
  password: string;
  username: string;
  origin: string;
  href: string;
  set: (key: string, value: string) => void;
  toString: () => string;
};

const hasProtocol = (url: string): boolean => {
  return url.startsWith('http:') ||
        url.startsWith('https:') ||
        url.startsWith('ws:') ||
        url.startsWith('wss:') ||
        url.startsWith('ftp:') ||
        url.startsWith('gopher:') ||
        url.startsWith('file:');
};

const urlParse = (url: string): URLParsed => {
  const protocaled = hasProtocol(url);
  if (!protocaled) url = `http://${url}`;
  return urlParseOrg(url);
};

export default urlParse;
