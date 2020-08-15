# dynamic-objects-test

A simple example created to explore ideal approaches to packaging rhythms and pattern functions.

- In rhythmodulum 0.3 rhythms were called patterns. This was more confusing because a rhythm and pattern were not well differentiated. In rhythmodulum 0.4 patterns should refer to the functions used to create rhythms and rhythms will refer to instantiated rhythm objects.
- In rhythmodulum 0.3 patterns were objects pushed into an array of patterns. The name and other attributes of a rhythmic pattern existed as properties of that index of the pattern array. (see functions.js > makePatterns)
- In rhythmodulum 0.3 pattern generation and manipulation functions existed in an array called generate (see pattern-generators.js) and was called by using the index of a <select> element matching the index of generate array like so: generate[pattern.type-1](pattern). (See ui-patterns) The problem with this is that it required the pattern generation and manipulation functions and the <select> element to be in a certain order, which is a pain to edit.
  
IN SHORT using arrays to associate the browser elements, the pattern objects, and the pattern functions was prone to coding errors and is not easy to change. I think using a rhythm class is the best approach.

With the current dynamic-objects-test I have a class called myClass which represents the rhyhtm object class. myClass has two prototypical functions to represent pattern generation and manipulation functions. You can create a new object instance of the myClass class by entering a name in the name <input> and clicking the add new object button. 

The goal was to create and get objects, set properties, and call functions as directly as possible BY NAME rather than BY INDEX from the browser for simplicity and clarity.
