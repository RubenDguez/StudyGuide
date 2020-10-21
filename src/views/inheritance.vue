<template>
  <v-container>
    <h2 class="text-h2 primary--text text-center">Inheritance</h2>
    <br />
    <h4 class="text-h4 success--text">Inheritance</h4>
    <ul class="body-1">
      <li class="font-italic">
        <strong>Inheritance in Java is</strong> a mechanism in which one object
        acquires all the properties and behaviors of a parent object. It is an
        important part of OOPs (Object Oriented Programming System).
      </li>
      <li class="font-italic">
        The idea behind inheritance in Java is that you can create new classes
        that are built upon existing classes. When you inherit from an existing
        class, you can reuse methods and fields of the parent class. Moreover,
        you can add new methods and fields in your current class also
      </li>
      <li class="font-italic">
        Inheritance represent the <strong>IS-A relationship</strong> which is
        also knwon as a parent-child relationship.
      </li>
    </ul>
    <br />
    <h4 class="text-h4 success--text">Advantages of Inheritance</h4>
    <ul class="body-1">
      <li class="font-italic">
        For Method Overriding (so runtime polymorphism can be achieved).
      </li>
      <li class="font-italic">For Code Reusability.</li>
    </ul>
    <br />
    <h4 class="text-h4 success--text">Terms used in Inheritance</h4>
    <ul class="body-1">
      <li class="font-italic">
        <strong>Class:</strong> A class is a group of objects which have common
        properties. It is a template or blueprint from which objects are
        created.
      </li>
      <li class="font-italic">
        <strong>Sub Class / Child Class:</strong> Subclass is a class which
        inherits the other class. It is also called a derived class, extended
        class or child class.
      </li>
      <li class="font-italic">
        <strong>Super Class / Parent Class:</strong> Superclass is the class
        from where a subclass inherits the features. It is also called a base
        class or a parent class.
      </li>
      <li class="font-italic">
        <strong>Reusability:</strong> As the name specifies, reusability is a
        mechanism which facilitates you to reuse the fields and methods of the
        existing class when you create a new class. You can use the same fields
        and methods already defined in the previous class.
      </li>
    </ul>
    <br />
    <h4 class="text-h4 success--text">Syntax</h4>

    <pre class="grey lighten-3">
        <code class="transparent">
        class Subclass-name extends Superclass-name {
            // methods and fields added here
        }
        </code>
    </pre>

    <p class="body-1">
      The <code>extends</code> <strong>keyword</strong> indicates that you are
      making a new class that derives from an existing class. The meaning of
      <i>"extends"</i> is to increase the functionality.
    </p>
    <br />
    <h4 class="text-h4 success--text">Example of Inheritance</h4>
    <p class="body-1">
      As displayed in the figure below, Programmer is the subclass and Employee
      is the superclass. The relationship between the two classes is
      <strong>Programmer IS-A Employee</strong>. It means that Programmer is a
      type of Employee
    </p>

    <img src="../img/diagram2.jpg" alt="" />

    <pre class="grey lighten-3">
        <code class="transparent">
        class Employee {
            float salary = 40000;
        }

        class Programmer {

            float bonus = 10000;

            public static void main(String args[]) {
                Programmer p = new Programmer();
                System.out.println("Programmer salary is: " + p.salary);
                System.out.println("Bonus of Programmer is: " + p.bonus);
            }
        }
        </code>
    </pre>
    <br />
    <pre class="black">
        <code class="transparent green--text">
        Output:
        Programmer salary is: 40000
        Bonus of Programmer is: 10000
        </code>
    </pre>
    <br />
    <br />
    <h4 class="text-h4 success--text">Types Of Inheritance in Java</h4>
    <p class="body-1">
      On the basis of class, there can be three types of inheritance in Java:
      <i>Single, Miltilevel and Hierarchical</i>.
      <br />
      In Java programming, multiple and hybrid inheritance is supported through
      interface only. We will learn about interfaces later.
    </p>

    <img src="../img/diagram3.png" alt="" />
    <img src="../img/diagram4.jpg" alt="" />

    <h4 class="text-h4 success--text">Single Inheritance</h4>
    <pre class="grey lighten-3">
        <code class="transparent">
        class Animal {
            void eat() {
                System.out.println("eating...");
            }
        }

        class Dog extends Animal {
            void bark() {
                System.out.println("barking...");
            }
        }

        class TestInheritance {
            public static void main(String args[]) {
                Dog d = new Dog();
                d.bark();
                d.eat();
            }
        }
        </code>
    </pre>
    <br />
    <pre class="black">
        <code class="transparent green--text">
        Output:
        barking...
        eating...
        </code>
    </pre>
    <br />
    <h4 class="text-h4 success--text">Multilevel Inheritance</h4>
    <pre class="grey lighten-3">
        <code class="transparent">
        class Animal {
            void eat() {
                System.out.println("eating...");
            }
        }

        class Dog extends Animal {
            <code class="primary lighten-4">// Level 1 - Iheritance</code>
            void bark() {
                System.out.println("barking...");
            }
        }

        class BabyDog extends Dog {
            <code class="primary lighten-4">// Level 2 - Iheritance</code>
            void weep() {
                System.out.println("weeping...");
            }
        }

        class TestingInheritance2 {
            public static void main(String args[]) {
                BabyDog d = new BabyDog();
                d.weep();
                d.bark();
                d.eat();
            }
        }
        </code>
    </pre>
    <br />
    <pre class="black">
        <code class="transparent green--text">
            Output:
            weeping...
            barking...
            eating...
        </code>
    </pre>
    <br />
    <h4 class="text-h4 success--text">Hierarchical Inheritance</h4>
    <pre class="grey lighten-3">
        <code class="transparent">
        class Animal {
            void eat() {
                System.out.println("eating...");
            }
        }

        class Dog extends Animal {
            <code class="primary lighten-4">// Hierarchical Inheritance</code>
            void bark() {
                System.out.println("barking...");
            }
        }

        class Cat extends Animal {
            <code class="primary lighten-4">// Hierarchical Inheritance</code>
            void meow() {
                System.out.println("meowing...");
            }
        }

        class TestInheritance3 {
            public static void main(String args[]) {
                Cat c = new Cat();
                c.meow();
                c.eat();
                <code class="warning lighten-3 purple--text">// c.bark(); // Error</code>
            }
        }
        </code>
    </pre>
    <br />
    <h4 class="text-h4 success--text">
      Why multiple inheritance is not supported in Java
    </h4>
    <p class="body-1">
      To reduce complexity and simplify the language, multiple inheritance is
      not supported in Java.
      <br />
      <br />
      Consider a scenario where A, B and C are three classes. The C class
      inherits A and B classes. if A and B classes have the same method and you
      call it from child class object, there will be ambiguity to call the
      method of A or B classes.
      <br />
      <br />
      Since compile-time errors are better than runtime errors, Java renders
      compile-time error if you inherit 2 classes. So whether you have method or
      different, there will be compile time error.
    </p>
    <pre class="grey lighten-3">
        <code class="transparent">
        class A {
            void msg() {
                System.out.println("Hello");
            }
        }

        class B {
            void msg() {
                System.out.println("Welcome");
            }
        }

        class C extends A, B {
            <code class="primary lighten-4">// suppose if it were</code>

            public static void main (String args[]) {
                C obj = new C();
                obj.msg(); <code class="warning lighten-3">// Now which msg() method would be invoked?</code>
            }
        }
        </code>
    </pre>
  </v-container>
</template>
<script>
export default {
  name: "inheritance",
};
</script>
