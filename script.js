// complete the given function

function palindrome(str){

    // Convert string to lowercase
    str = str.toLowerCase();

    // Remove spaces
    str = str.replace(/\s/g, "");

    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

module.exports = palindrome
