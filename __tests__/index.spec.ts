import urlParse from '../src';

describe('urlParse', () => {
  test('should parse a URL with http protocol', () => {
    const url = 'http://example.com/path?query=value#hash';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('example.com');
    expect(parsed.pathname).toBe('/path');
    expect(parsed.query).toBe('?query=value');
    expect(parsed.hash).toBe('#hash');
  });

  test('should parse a URL with https protocol', () => {
    const url = 'https://example.com/path?query=value#hash';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('https:');
    expect(parsed.hostname).toBe('example.com');
    expect(parsed.pathname).toBe('/path');
    expect(parsed.query).toBe('?query=value');
    expect(parsed.hash).toBe('#hash');
  });

  test('should add http protocol if missing', () => {
    const url = 'example.com/path';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('example.com');
    expect(parsed.pathname).toBe('/path');
  });

  test('should handle URLs with only domain', () => {
    const url = 'example.com';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('example.com');
    expect(parsed.pathname).toBe('/');
  });

  test('should handle URLs with subdomains', () => {
    const url = 'sub.example.com';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('sub.example.com');
  });

  test('should handle URLs with IP addresses', () => {
    const url = '192.168.1.1';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('192.168.1.1');
  });

  test('should handle empty string', () => {
    const url = '';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('');
  });

  // example.com:8080/audio
  test('should handle URLs with port', () => {
    const url = 'example.com:8080/audio';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('example.com');
    expect(parsed.port).toBe('8080');
    expect(parsed.pathname).toBe('/audio');
  });

  // example.com/path?param=http://another.com
  test('should handle URLs with query params with protocol', () => {
    const url = 'example.com/path?param=http://another.com';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('example.com');
    expect(parsed.pathname).toBe('/path');
    expect(parsed.query).toBe('?param=http://another.com');
  });

  // test ip address with port
  test('should handle URLs with IP address with port', () => {
    const url = '192.168.1.1:8080/dashboard';
    const parsed = urlParse(url);
    expect(parsed.protocol).toBe('http:');
    expect(parsed.hostname).toBe('192.168.1.1');
    expect(parsed.port).toBe('8080');
    expect(parsed.pathname).toBe('/dashboard');
  });

  test('changed protocal should be set', ()=>{
    const url = 'http://example.com/path?query=value#hash';
    const parsed = urlParse(url);
    parsed.set('protocol', 'https:');
    expect(parsed.protocol).toBe('https:');
  })

  // tostring
  test('should return string', () => {
    const url = 'http://example.com/path?query=value#hash';
    const parsed = urlParse(url);
    expect(parsed.toString()).toBe('http://example.com/path?query=value#hash');
  });
});