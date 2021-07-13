# Twig Education Coding Challenge
The following readme lays out any assumptions I made while performing the coding challenge. I opted to use TypeScript over JavaScript which I hope is okay.
## Assumptions
Attempting to split an array of length N into length M where M > N will throw an error. I'm not sure how you wanted to handle cases such as this as it is not specified.

The coding challenge was not overly specific about edge cases. Examples of such edge cases include

> groupArrayElements([1, 2, 3, 4], 3))
> An example like this could end as either
>	// [ [ 1, 2 ], [ 3 ], [ 4 ] ]
> // [ [ 1, 2 ], [ 3, 4 ], [] ]

This first example does not have all arrays of equal length. The second example does not use n number of arrays unless the last array is empty. I went forward assuming the second example as I felt it resulted closer to the brief.
## Executing
