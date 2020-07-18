// formatMonth
// Takes a string value number for month and year and returns a
// string with the correct month. i.e. 2020-10 formats to October // 2020

export const formatMonth = (dateString: string): string => {
  if (dateString !== '') {
    const date = new Date(dateString);
    const monthAndYear = date.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    return monthAndYear;
  } else {
    return '';
  }
};
