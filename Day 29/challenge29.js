// Define your promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
const promise3 = new Promise((_, reject) => setTimeout(() => reject(new Error('Promise 3 rejected')), 1500));

// Array of promises
const promisesArray = [promise1, promise2, promise3];
function raceWithTimeout(promises, timeout) {
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout));
    return Promise.race([...promises, timeoutPromise]);
}
const timeoutValue = 1600;

raceWithTimeout(promisesArray, timeoutValue)
    .then((result) => console.log('Resolved:', result))
    .catch((error) => console.error('Rejected:', error.message));
