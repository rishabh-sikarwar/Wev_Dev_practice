#include <iostream>

using namespace std;

float abs(float x) {
    return (x < 0) ? -x : x;
}

float squareRoot(float number) {
    // Base cases
    if (number == 0 || number == 1) {
        return number;
    }
    
    // Variables to store the result and previous guess
    float result;
    float guess = number / 2;
    
    // Iterate until the guess converges
    while (true) {
        result = number / guess;
        guess = (guess + result) / 2;
        if (abs(guess - result) < 1) {
            break;
        }
    }
    
    return guess;
}

int main() {
    float number;
    
    // Input the number from the user
    cout << "Enter a number: ";
    cin >> number;
    
    // Calculate the square root
    float root = squareRoot(number);
    
    // Output the result
    cout << "Square root of " << number << " is: " << root << endl;
    
    return 0;
}

