import data from '../../data/courses.json';

const numItems = data.length;

describe('Number tests', () => {
    test('Number of items = 12', () => {
        expect(numItems).toBe(12);
    });
    
    test('Number of items to be greater than 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });
});

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

describe('String tests', () => {
    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/);
    });
    
    test('The title contains React', () => {
        expect(dataTest).toContain('React');
    });
});

test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

test('The title contains React', () => {
    expect(dataTest).toContain('React');
});

// Arrays
const data2 = ['React Native', 'React'];

descrie('Arrays and Objects tests', () => {
    test('The list of courses contains React Native and React', () => {
        expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
    });
    
    test('The first course to have a property of title', () => {
        expect(data[0]).toHaveProperty('title');
    });
    
    test('The first course to have a property of views and value of 31,266', () => {
        expect(data[0]).toHaveProperty('views', '31,266');
    });
});

test('The list of courses contains React Native and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayConataining(data2));
});

// Objects

test('The first course to have a property title', () => {
    expect(data[0].toHaveProperty('title'));
});

test('The first course to have a property title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', 31,266);
});