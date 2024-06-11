/**
 * Function to print the current time.
 */
function printCurrentTime() {
    const now=new Date();
    console.log(now.toISOString());
    console.log(now.getHours())
    console.log(now.getMinutes())
    console.log(now.getSeconds())
    console.log(now.getMonth())
}

// Example usage
printCurrentTime();
