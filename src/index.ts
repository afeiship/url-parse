
import urlParseOrg from 'url-parse';

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

const urlParse = (url: string): URLParsed => {
  const hasProtocol = url.includes('://');
  if (!hasProtocol) url = `http://${url}`;
  return urlParseOrg(url);
};

export default urlParse;
