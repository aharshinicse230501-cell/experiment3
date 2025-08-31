
/ This is a simple Dart program demonstrating core language features

void main() {

  print('\n--- Variables, Constants ---');

  // Variable declaration with type inference
  var name = 'Hari';      // String type is inferred
  var age = 30;           // int type is inferred

  // Explicit type declaration
  String country = 'India';
  int zipCode = 505001;
  double height = 5.8;
  bool isStudent = true;
  dynamic dataitem = 10;

  // Constants
  const int DAYS_IN_WEEK = 7;   // Compile-time constant
  final birthYear = 1993;       // Cannot be reassigned. But value can be initialized dynamically at runtime, based on some computation.

  // String interpolation
  print('Person: $name is $age years old');
  print('Lives in: $country, $zipCode');
  print('Height: ${height}ft, Student: $isStudent');
  print('Birth year: $birthYear (${2025 - birthYear} years old)');
  print('dataitem value is: ${dataitem}');



print('\n--- COLLECTIONS ---');

  // Lists (Arrays)
  List<String> fruits = ['Apple', 'Banana', 'Orange'];
  List<int> numbers = [1, 2, 3, 4, 5];

  // Accessing list elements
  print('First fruit: ${fruits[0]}');
  print('Last number: ${numbers[numbers.length - 1]}');

  // List operations
  fruits.add('Mango');
  numbers.remove(3);

  print('Fruits after modification: $fruits');
  print('Numbers after modification: $numbers');

  // Maps (Dictionaries)
  Map<String, dynamic> person = {
    'name': 'Rama',
    'age': 25,
    'isEmployed': true,
    'hobbies': ['Reading', 'Playing']
  };

  print('Person map: $person');
  print('Person name: ${person['name']}');
  print('Person hobbies: ${person['hobbies']}');

  // Sets (Unique collections)
  Set<int> uniqueNumbers = {1, 2, 3, 3, 4, 4, 5};
  print('Unique numbers set: $uniqueNumbers'); // Duplicates are automatically removed





  print('\n--- CONTROL FLOW Statements ---');

  // If-else statements
  int score = 85;

  if (score >= 90) {
    print('Grade: A');
  } else if (score >= 80) {
    print('Grade: B');
  } else if (score >= 70) {
    print('Grade: C');
  } else {
    print('Grade: F');
  }

  // Switch statements
  String fruit = 'Apple';

  switch (fruit) {
    case 'Apple':
      print('Selected fruit is red');
      break;
    case 'Banana':
      print('Selected fruit is yellow');
      break;
    case 'Orange':
      print('Selected fruit is orange');
      break;
    default:
      print('Unknown fruit color');
  }

  // For loops
  print('For loop example:');
  for (int i = 0; i < 5; i++) {
    print('  Index: $i');
  }

  // For-in loops (for collections)
  print('For-in loop example:');
  for (String fruit in fruits) {
    print('  Fruit: $fruit');
  }

  // While loops
  print('While loop example:');
  int counter = 0;
  while (counter < 3) {
    print('  Counter: $counter');
    counter++;
  }





  print('\n--- NULL SAFETY ---');

  // Nullable variables
  String? nullableName = null;  // Can be null
  int? nullableAge;            // Initialized to null

  // Non-nullable variables must be initialized
  String nonNullName = 'Required';
  // String willError; // Would cause error if uncommented

  // Null check


if (nullableName != null) {
    print('Name length: ${nullableName.length}');
  } else {
    print('Name is null');
  }

  // Null-aware operators
  print('Name: ${nullableName ?? 'Anonymous'}'); // Null-coalescing

  print('Age: ${nullableAge?.toString() ?? 'Unknown'}'); // Null-conditional + null-coalescing

  // Late initialization
  late String lateInitialized;
  // Will be initialized before use
  lateInitialized = 'Now initialized';
  print('Late initialized: $lateInitialized');





  print('\n--- FUNCTIONS ---');

  // Function calls
  int sum = add(5, 3);
  print('Sum: $sum');

  // Function calls with positional parameters
  print(greet('Rama'));
  print(greet('Shyam', 'Dr.'));

  // Function calls with named parameters
  printPersonInfo(name: 'Rama');
  printPersonInfo(name: 'Shyam', age: 28, occupation: 'Professor');

  print('5 × 7 = ${multiply(5, 7)}');
  print('50 × 70 = ${multiply2(50, 70)}');
  print('40 × 60 = ${multiply3(40, 60)}');
}

// Basic function
int add(int a, int b) {
  return a + b;
}

// Function with optional parameters
String greet(String name, [String? title]) {
  if (title != null) {
    return 'Hello, $title $name!';
  }
  return 'Hello, $name!';
}

// Function with named parameters
void printPersonInfo({required String name, int age = 0, String? occupation}) {
  String info = 'Name: $name';
  if (age > 0) info += ', Age: $age';
  if (occupation != null) info += ', Occupation: $occupation';
  print(info);
}

// Arrow function (shorthand for simple functions)
int multiply(int a, int b) => a * b;
dynamic multiply2 = (int a, int b) => a * b;
dynamic multiply3 = (int a, int b) { return a * b; };



