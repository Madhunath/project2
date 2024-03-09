import course1 from "../myproject/img/course-1.jpg";
import course2 from "../myproject/img/course-2.jpg";
import course3 from "../myproject/img/course-2.jpg";

const initialState = {
  courses1: [
    {
      id: 1,
      name: "Full Stack",
      price: 40000,
      image: course1,
      instructor: "John Deo"

  },
  {
      id: 2,
      name: "Graphics Design",
      price: 30000,
      image: course2,
      instructor: "Jane Smith"

  },
  {
      id: 3,
      name: "Flutter",
      price: 35000,
      image: course3,
      instructor: "William"

  }
  ],
  cart: []
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        courses1: state.courses1.map(course =>
          course.id === action.payload
            ? { ...course, quantity: 0 }
            : course
        ),
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    

    default:
      return state
  }
}
export default cartReducer;

