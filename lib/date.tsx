// Helper function to format date in yyyy-mm-dd to a string such as the following: `Aug 02, 2021`
export const getFormatDate = (date: string) => {
    const dateArr = date.split('-');
    const day = dateArr[2];
    const year = dateArr[0];
    const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthInt = parseInt(dateArr[1], 10) - 1;
    const month = monthsArr[monthInt];
    return `${month} ${day}, ${year}`;
}