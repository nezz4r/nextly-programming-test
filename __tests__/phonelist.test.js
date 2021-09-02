const quickSearch = require('../src/phonelist/');
const phoneList = require('../src/phonelist/phonelist.json');

describe('the quickSearch function, for a phone number list,', () => {
  test('finds the desired data for Andrew Wunsch', () => {
    const actualData = quickSearch('Andrew Wunsch', phoneList);
    const expectedData = { name: 'Andrew Wunsch', number: '739.314.3899 x146' };
    expect(actualData).toEqual(expectedData);
  });
  test('finds the desired data for Danielle Ruecker', () => {
    const actualData = quickSearch('Danielle Ruecker', phoneList);
    const expectedData = {
      name: 'Danielle Ruecker',
      number: '355-970-9990 x72650',
    };
    expect(actualData).toEqual(expectedData);
  });
  test('finds the desired data for Levi Wilderman', () => {
    const actualData = quickSearch('Levi Wilderman', phoneList);
    const expectedData = {
      name: 'Levi Wilderman',
      number: '519-643-8327 x9592',
    };
    expect(actualData).toEqual(expectedData);
  });
  test('finds the desired data for Tricia Yost', () => {
    const actualData = quickSearch('Tricia Yost', phoneList);
    const expectedData = { name: 'Tricia Yost', number: '(299) 868-2570' };
    expect(actualData).toEqual(expectedData);
  });
  test('finds the desired data for Willie Orn', () => {
    const actualData = quickSearch('Willie Orn', phoneList);
    const expectedData = { name: 'Willie Orn', number: '950-715-8642 x7897' };
    expect(actualData).toEqual(expectedData);
  });
  test('returns an array of length 1', () => {
    const input = [{ name: 'Willie Orn', number: '950-715-8642 x7897' }];
    const expectedData = { name: 'Willie Orn', number: '950-715-8642 x7897' };
    const actualData = quickSearch('Willie Orn', input);
    expect(actualData).toEqual(expectedData);
  });
  test('throws error in case input is not array', () => {
    const input = { name: 'Willie Orn', number: '950-715-8642 x7897' };
    expect(() => {
      quickSearch('Willie Orn', input);
    }).toThrow();
  });
});
