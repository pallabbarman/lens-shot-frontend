import { cssColor } from '../color';

describe('cssColor', () => {
    test('should return the correct css vars', () => {
        expect(cssColor('white')).toBe('var(--white)');
        expect(cssColor('richblack')).toBe('var(--richblack)');
        expect(cssColor('stormgrey')).toBe('var(--stormgrey)');
    });

    test('should return the incorrect css vars', () => {
        expect(cssColor('white')).not.toBe('var(--richblack)');
        expect(cssColor('richblack')).not.toBe('var(--stormgrey)');
        expect(cssColor('stormgrey')).not.toBe('var(--white)');
    });
});
