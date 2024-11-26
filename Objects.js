const course = {
  courseName: "JavaScript",
  courseInstructor: "Hitesh Choudary",
  price: 0,
};

// object destructuring
const { courseInstructor, price } = course;
// you can only extract the data from the properties present in the object.
console.log(courseInstructor);
console.log(price);

// you can also create alias, but after creating alias you can't use the original property names
const { courseInstructor: instructor, price: cost } = course;
console.log(instructor);
console.log(cost);
