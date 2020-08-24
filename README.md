# Japa

# Task 1

1. Create a function which concatenates the number 7 to the end of every chord in an array.
   Ignore all chords which already end with 7.
   Examples
   jazzify(["G", "F", "C"])
   ➞
   ["G7", "F7", "C7"]
   jazzify(["
   Dm", "G", "E", "A"])
   ➞
   ["Dm7", "G7", "E7", "A7"]
   jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])
   ➞
   ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
   jazzify([])
   ➞
   []

2. Mary wants to run a 25

-
mile marathon. When she attempts to sign up for the marathon,
she not
ices the sign -
up sheet doesn't directly state the marathon's length. Instead, the
marathon's length is listed in small, different portions. Help Mary find out how long the
marathon actually is.
Return true if the marathon is 25 miles long, otherwise, ret
urn false.
Examples
marathonDistance([1, 2, 3, 4])
➞
false
marathonDistance([1, 9, 5, 8, 2])
➞
true
marathonDistance([
-
6, 15, 4])
➞
true
Notes
Items in the array will always be integers.
Items in the array may be negative or positive, but since negative distance isn't possible, find
a way to convert the sum of the distance into a positive integer.
Return false if the arguments are empty or not provided.

3. Create a function that takes two numbers as arguments (num, length) and returns an
   array of multiples of num up to length.
   Examples
   arrayOfMultiples(7, 5)
   ➞
   [7, 14, 21, 28, 35]
   arrayOfMultiples(12, 10)
   ➞
   [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
   arrayOfMultiples(17, 6)
   ➞
   [17, 34, 51, 68, 85, 102]
   Notes
   Notice that num is also included in the returned array.

4. The Javascript date object returns a new Date like this(2020

-
08 -
04T13:34:42.351Z) using
the constructor new Date(), return the day:day, m
onth:month and year:year as key value
pairs in a hash.

5. Favour is a smart and knowledge savvy dude. He overheard some people talking about
   an algorithm used to validate a variety of identification numbers, such as credit card
   numbers, IMEI numbers, Can
   adian Social Insurance Numbers. They called it Luhn's
   algorithm. He did a quick search online and saw the steps to implementing the algorithm on
   wikipedia. He started coding it out but he got frustrated at some point then he came to you
   for help. At that p
   oint, you saw that he missed out some things logic

-
wise and you would just
code it out from scratch showing him some concepts and learning along the way too. Kindly
send a solution to your own version of the solution to the problem.

6. Implement two out
   of the popular search algorithms you know.

7. Buhari and Osibajo each created one problem. A reviewer rates the two challenges,
   awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and
   difficulty.
   The rating for
   Buhari's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Osibajo's
   challenge is the triplet b = (b[0], b[1], b[2]).
   The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and
   a[2] with b[2].
   If a[i]
   > b[i], then Buhari is awarded 1 point.
   > If a[i] < b[i], then Osibajo is awarded 1 point.
   > If a[i] = b[i], then neither person receives a point.
   > Comparison points is the total points a person earned.
   > Given a and b, determine their respective comparison points.
   > Example
   > a = [1, 2, 3]
   > b = [3, 2, 1]
   > For elements 0, Osibajo is awarded a point because b[0] is larger .
   > For the equal elements a[1] and b[1], no points are earned.
   > Finally, for elements 2, a[
   > 2] > b[2] so Buhari receives a point.
   > The return array is [1, 1] with Buhari's score first and Osibajo's second.
   > P.S: You may call the function comparePoints(a,b)

-
[1,1]

- Link to solution -> https://repl.it/@ubwise4real/wejapatask1

# Task 2

A command line application that generates a ReadMe.md file

# Task 3

Task for the week as promised @here:Make a get request to https://coderbyte.com/api/challenges/json/json-cleaning using nodeJS's native https module, clean the result according to the following rules:Remove all keys that have values of N/A, - or empty strings. If one of these values appear in an array, remove that single item from the array.Then create a new file(programmatically) and print the result into the file.
