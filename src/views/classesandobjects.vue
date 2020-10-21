<template>
  <v-container>
    <h1 class="text-h2">Classes and Objects</h1>
    <h4>Object</h4>
    <p>
      Any entity that has state and behavior is known as an object. For example
      a chair, pen, table, keyboard, bike, etc. It can be physical or logical.
    </p>
    <p>
      An Object can be defined as an instance of a class. An object contains an
      address and takes up some space in memory. Objects can communicate without
      knowing the details of each other's data or code. The only necessary thing
      is the type of message accepted and the type of response turned by the
      object.
    </p>
    <p>
      <strong>Example: </strong>A dog is an object because it has states like
      color, name, breed, etc. as well as behavior like wagging the tail,
      barking, eating,
    </p>
    <br />
    <h4>Class</h4>
    <p>
      A <strong>CLASS, </strong>in the context of <strong>JAVA, </strong>are
      templates that are used to create objects, and to
      <strong>define </strong>object data types and methods. Core properties
      include the data type and methods that may be used by the object.
    </p>
    <p>
      A class can also be defined as a blueprint from which yu can create an
      individual object. Class does not consume any memory space.
    </p>
    <br />
    <h4>Advantages of OOPs over Procedure Oriented Programming</h4>
    <ul>
      <li>
        OOPs makes development and maintenance easier whereas in a
        procedure-oriented programming language it is not easy to manage if code
        grows as project size increases.
      </li>
      <li>
        OOPs provide data hiding whereas in a procedure-oriented programming
        language a globar data can be accessed from anywhere.
      </li>
    </ul>
    <div class="grey lighten-3">
      <h5>Class Example:</h5>
      <code style="background-color: transparent;">
        <pre>
          public class Dog { 
            String breed; 
            int age; 
            String color; 

            void barking() {

            }
            void hungry() {

            } 
            void sleeping() {

            } 
          }
      </pre
        >
      </code>
    </div>
    <p>A class is a blueprint from which individual objects are created.</p>
    <p>
      The code above is a sample of a class <strong>Dog </strong> with
      attributes and behavior.
    </p>
  </v-container>
</template>
<script>
export default {
  name: "classesandobjects",
};
</script>
