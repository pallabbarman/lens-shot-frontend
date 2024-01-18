import size from 'lodash/size';

export const getNameInitials = (name: string): string => {
    const nameParts = name?.toUpperCase().split(' ');
    const firstNameInitial = nameParts[0]?.charAt(0) || '';
    const lastNameInitial =
        size(nameParts) > 1 ? nameParts[size(nameParts) - 1]?.charAt(0) : '';

    return lastNameInitial
        ? firstNameInitial + lastNameInitial
        : firstNameInitial;
};
