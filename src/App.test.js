import { getLenght } from './components/getLenght';

test('renders learn react link', () => {
  expect(getLenght('word')).toBe(4);
  expect(getLenght('dinosaure')).toBe(2);
});