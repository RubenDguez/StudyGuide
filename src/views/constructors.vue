<template>
  <v-container>
    <h2 class="text-h2 primary--text">Constructors</h2>
    <h4 class="text-h4 success--text">Constructor</h4>
    <p class="body-1">
      In Java, a constructor is a block of code similar to the method. It is
      called when an instance of the object is created, and memory is allocated
      for the object.
      <br /><br />
      It is a special type of method which is used to initialize the object.
    </p>
    <h4 class="text-h4 success--text">When is a constructor called?</h4>
    <p class="body-1">
      When an object is created, compiler makes sure that constructors for all
      of its subobjects (its memeber and inherited objects) are called. If
      members have default constructos or constructors without parameter then
      these constructors are called automatically, otherwise parameterized
      constructors can be called using initializer list.
    </p>
    <p
      class="caption text-uppercase warning pink--text lighten-2 px-3 py-2 mx-2"
    >
      <strong>Note: </strong>It is called constructor because it constructs the
      values at the time of object creation. It is not necessary to write a
      constructor for a class. It is because Java compiler creates a default
      constructor if your class does not have any.
    </p>

    <h4 class="text-h4 success--text">
      Rules to remember while creating a constructor
    </h4>
    <p class="body-1">There are three rules defined for the constructor.</p>
    <ul class="body-1">
      <li class="font-italic">
        Constructor name must be the same as its class name.
      </li>
      <li class="font-italic">
        A Constructor must have no explicit return tipe.
      </li>
      <li class="font-italic">
        A Java constructor cannot be <code>abstract</code>, <code>static</code>,
        <code>final</code>, and <code>synchronized</code>.
      </li>
    </ul>
    <br />
    <h4 class="text-h4 success--text">Types of constructors</h4>
    <ul class="body-1">
      <li class="font-italic">Default constructor</li>
      <li class="font-italic">Parameterized Constructor</li>
    </ul>
    <img
      class="ma-5"
      src="../img/typesofconstructor.png"
      alt="Types of Constructors"
    />
    <br />
    <h4 class="text-h4 success--text">Default Constructor</h4>
    <p class="body-1">
      The default constructor is a <i>no-args</i> constructor that the Java
      compiler inserts on your behalf; it contains de <code>default</code> call
      to <code>super();</code> which is the default behavior. If you implemnt
      any constructor then you no longer receive a default constructor
    </p>
    <p
      class="caption text-uppercase warning pink--text lighten-2 px-3 py-2 mx-2"
    >
      <strong>Note:</strong> If there is no constructor in the class, the
      compiler adds a default constructor
    </p>
    <h4 class="text-h4 success--text">No-Argument Constructor</h4>
    <code>
      <pre>
        public Bicycle() {
            gear = 1;
            cadence = 10;
            speed = 0;
        }
        </pre
      >
    </code>

    <p class="body-1">
      <code>Bicycle yourBike = new Bicycle();</code> invokes the no-argument
      constructor to create a new <code>Bicycle</code> object called
      <code>yourBike</code>.
    </p>
    <p
      class="caption text-uppercase warning pink--text lighten-2 px-3 py-2 mx-2"
    >
      <strong>Note:</strong> The diagram below describes that a default
      constructor is added by the compiler when there is no constructor declared
      in the class.
    </p>
    <img class="ma-5" src="../img/diagram1.png" alt="Constructor Diagram" />
    <p class="body-1">
      A constructor which has a specific number of parameter is alled a
      <i>Parameterized Constructor</i>
    </p>
    <p class="body-1">
      The parameterized constructor is used to provide different values to the
      distinct objects. However, you can provide the same values also.
    </p>
    <code>
      <pre>
        class Student4 {
            int id;
            String name;

            Student4(int i, String n) {
                id = i;
                name = n;
            }

            void display() {
                System.out.println(id + " " + name);
            }

            public static void main(String args[]) {
                Student4 s1 = new Student4(111, "Karan");
                Student4 s2 = new Student4(222, "Aryan");
                s1.display();
                s2.display();
            }
        }
        </pre
      >
    </code>
    <p class="body-1">
      In the above example, we have created the constructor of
      <strong>Student</strong> class that have two parameters. We can have any
      number of parameters in the constructor.
    </p>
    <h4 class="text-h4 success--text">Constructor Overloading</h4>
    <p class="body-1">
      In Java, a constructor is just like a method but without return type. it
      can also be overloaded like Java methods.
      <br /><br />
      Constructor overloading in Java is a technique of having more than one
      constructor with different parameter lists. They are arranged in a way
      that each constructor performs a different task. They are differentiated
      by the compiler by the number of parameters in the list and their types.
    </p>
    <code>
      <pre>
        class Student5 {
            int id;
            String name;
            int age;

            // creating two argument constructor...
            Student5(int i, String n) {
                id = i;
                name = n;
            }

            // creating three argument constructor...
            Student5(int i, String n, int a) {
                id = i;
                name = n;
                age = a
            }

            void display() {
                System.out.println(id + " " + name + " " + age);
            }

            public static void main(String args[]) {
                Student5 s1 = new Student5(111, "Karan");
                Student5 s2 = new Student5(222, "Aryan", 25);
                s1.display();
                s2.display();
            }

        }
        </pre
      >
    </code>
    <h4 class="text-h4 success--text">Constructor vs Method</h4>
    <h6 class="text-h6 purple--text">Constructor:</h6>
    <ul class="body-1">
      <li class="font-italic">
        A constructor is used to initialize the state of an object.
      </li>
      <li class="font-italic">A constructor must not have a return type.</li>
      <li class="font-italic">The constructor is invoked implicitly.</li>
      <li class="font-italic">
        The Java compiler provides a default constructor if you do not have any
        constructor in a class.
      </li>
      <li class="font-italic">
        The constructor name must be same as the class name.
      </li>
    </ul>
    <br />
    <h6 class="text-h6 purple--text">Method:</h6>
    <ul class="body-1">
      <li class="font-italic">
        A method is used to expose the behavior of an object.
      </li>
      <li class="font-italic">A method must have a return type.</li>
      <li class="font-italic">The method is invoked explicitly</li>
      <li class="font-italic">
        The method is not provided by the compiler in any case.
      </li>
      <li class="font-italic">
        The method name may or may not be same as class name.
      </li>
    </ul>
  </v-container>
</template>
<script>
export default {
  name: "constructors",
};
</script>
