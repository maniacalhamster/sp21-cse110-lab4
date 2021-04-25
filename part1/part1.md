Part 1A: A Quick Introduction
---

1. 'values added: 20'
2. 'final result: 20'
3. 'values added: 20'
4. Code will run into an error since res is only defined within the `if` block
and line 13 is outside that block.
5. Code will run into an error since res is defined as `const`, so the attempt
to reassign a value in line 7 is invalid.
6. Code will run into an error for the same reason as the answer to previous
question.

Part 1B: A Little More of a Challenge
---
1. `i` was defined using `var` so line 12 would print the last value assigned
   to it. The last assigned value would've been `prices.length - 1`.
2. `discountedPrice` was defined using `var` so line 13 would print the last
   value assigned to it. The last assigned value would've been the unrounded
   result of applying the given discount to the last element of `prices`. This
   should be `300 * (1 - 0.5) ~ 150`.
3. `finalPrice` was defined using `var` so line 14 would print the last value
   assigned to it. The last assigned value would've been the price formatted
   result of the last `discountedPrice`, in this case `150.00`.
4. The function iterates through all the `prices`, applies the `discount`, 
   price formats it, and adds it to an array of processed prices called 
   `discounted`. Since the `discounted` and `finalPrice` variables were both
   defined using `var`, the for loop is able to access and modify them both so
   no errors there. Finally, because the loop processes first to last and the 
   processed prices are `push`ed onto `discounted`, the order is preserved.
   The function should return the following array: `[50.00, 100.00, 150.00]`.
5. `i` was defined using `let`, so would only be defined within the for-loop's
   block. Line 12 is outside the block and so `i` isn't defined there and the
   code would run into an error.
6. `discountedPrice` was defined using `let`, so would only be defined within
   the for loop's block. Line 13 is outside the block and so `discountedPrice`
   isn't defined there and the code wold run into an error.
7. `finalPrice` was defined using `let` and line 14 is in the same block so the
   last value assigned to it would be printed. The last assigned value would've
   been the price formatted result of the last `discountedPrice` - `150.00`.
8. The function iterates through all the `prices`, applies the `discount`, 
   price formats it, and adds it to an array of processed prices called 
   `discounted`. Since the `discounted` and `finalPrice` variables were both
   defined using `let`, the for loop is able to access and modify them both so
   no errors there. Finally, because the loop processes first to last and the 
   processed prices are `push`ed onto `discounted`, the order is preserved.
   The function should return the following array: `[50.00, 100.00, 150.00]`.
9. `i` was defined using `let`, so would only be defined within the for-loop's
   block. Line 12 is outside the block and so `i` isn't defined there and the
   code would run into an error.
10. `const` applies the same block scoping as `let` so `length` would be
    accessible by Line 12 and would print the value assigned to it:
    `prices.length = 3`.
11. The function iterates through all the `prices`, applies the `discount`,
    and adds it to an array of processed prices called `discounted`. Since the
    `discounted` and `length` variables were both defined using `const`, the
    for loop is able to access them both so no errors there. Finally, because
    the loop processes first to last and the processed prices are `push`ed onto
    `discounted`, the order is preserved. The function should return the
    following array: `[50, 100, 150]`.

## Date Types
12. 
    A. student.name;
    B. student['Grad Year'];
    C. student.greeting();
    D. student['Favorite Teacher'].name;
    E. student.courseLoad[0];

## Basic Operators & Type Conversion
13. 
    A. `'3' + 2         = '32'`
    B. `'3' - 2         = 1`
    C. `3 + null        = 3`
    D. `'3' + null      = '3null'`
    E. `true + 3        = 4`
    F. `false + null    = 0`
    G. `'3' + undefined = '3undefined'`
    H. `'3' - undefined = NaN`

14. 
    A. `('2' > 1)             = true`
    B. `('2' < '12')          = false`
    C. `(2 == '2')            = true`
    D. `(2 === '2')           = false`
    E. `(true == 2)           = false`
    F. `(true === Boolean(2)) = true`

15. `==` performs a comparison after type converting. `===` performs comparison
    without type converting (i.e. automatically `false` if different types).

## Loops
16. code written in `part1b-question16.js`.

## Functions
17. `[2,4,6]` would be returned. The `modifyArray` function first creates a new
    array to store and return results in. It then iterates through all elements
    of the `array` passed in, running the `callback` with each element and
    appending the result to the end of `newArr`. The `callback` function just
    doubles the input so the `modifyArray` function just returns an array with
    doubled values for each element in the array (same order maintained).

## setInterval(), setTimeout(), clearTimeout()
18. code written in `part1b-question18.js`.

19. The code will output:
1
4
3
2
