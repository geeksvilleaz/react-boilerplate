export const FOO_BAR = 'FOO_BAR';

export function fooBar(payload) {
  return {
    type: FOO_BAR,
    payload
  };
}
