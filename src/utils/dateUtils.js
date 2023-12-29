import moment from 'moment';

export const MMDDYYY = 'MM-DD-YYYY';
// Function to format a date in a specific format
export function formatDate(date, formatString) {
    return moment(date).format(formatString);
}

export function formatDateByMMDDYYY(date) {
    return moment(date).format(MMDDYYY);
}

// Function to get the current date and time
export function getCurrentDateTime() {
    return moment();
}

// Add more utility functions as needed
