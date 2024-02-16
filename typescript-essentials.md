# My TypeScript Journey: Earned Badges 🏆

## Badges Overview

1. **Getting Started with TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/Nuttik-9120/EJAE7XJP?sharingId=E839C56D540D058F)
2. **Declare Variable Types in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/Nuttik-9120/YVH2ZENR?sharingId=E839C56D540D058F)
3. **Implement interfaces in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/Nuttik-9120/UF5FPY53?sharingId=E839C56D540D058F)
4. **Develop typed functions by using TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/Nuttik-9120/24XTJ8BV?sharingId=E839C56D540D058F)

## Reflections

### 1. Getting Started with TypeScript

In the first module, I learned the main advantage of TS over JS: Thanks to static type checking, TypeScript detects problems in the code early in the development process.
I also learned how to install the TypeScript compiler in VS Code.

### 2. Declare Variable Types in TypeScript

In this module, I learned about the data types in TS.
They are divided into:

1.  Primitives:

- boolean
- number
- string
- enum
- void
- null
- undefined

2.  Object type

- сlass
- interfaces
- array
- literals

3.  Type parametrs.

Also in this module I learned about syntax declaration of variables using data types.
This knowledge enables me to start translating my code simply from JS to TS.

### 3. Implement interfaces in TypeScript

In this module, I learned:

1.  Interfaces are used to describe objects, their parameters, and property data types.
2.  An interface does not create an object, it only describes a type.
3.  Interfaces can be used to create abbreviated names for commonly used types.
4.  An interface can give you a clear understanding of what a function expects and what it will return, without having to refer to the documentation again.
5.  The difference between an interface and a type :

    - a type alias cannot be reopened to add new properties, whereas an interface can always be extended
    - a type alias can only describe a union or tuple.

6.  Syntax for declaring an interface.
7.  How to extend an interface.
8.  How to declare an interface with custom array types.

### 4. Develop typed functions by using TypeScript

In this module I learned:

1. That declaring argument data types in a function helps to avoid unnecessary input data validation code in the function body.
   Output validation works the same way. I see this as a benefit of using TS. If I forget to do data type checking in js, there will be an error, whereas the typescript will point it out to me during development.
   Also, it is convenient to work with functions that have already specified argument data types, because the IDE will prompt me when I use the function later.
2. The syntax for declaring named, anonymous and arrow functions, and for specifying the type of arguments and output data.
3. The difference between declaring function arguments in TS and JS. In TS, all function parameters are mandatory unless otherwise specified.
4. How to write an optional function parameter and how to pass an unlimited number of parameters to a function in the remaining parameters array.
5. How to use object destructuring as a function argument in a TS function call.
6. How to define function types using type aliases or interfaces.

This knowledge will help me when writing functions with ts. It is a pity that I have not yet understood how to pass random functions to the wrapper (decorator) if the type or interface of the callback is not known beforehand.
