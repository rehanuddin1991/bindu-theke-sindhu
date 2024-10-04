export const ROUTES = {
    HOME: "/",
    COURSE: "/course",
    BLOG: "/blog",
    FAQ: "/faq",
    
    LOGIN: "/login",
    REGISTER: "/register",
     
    SINGLE_COURSE: {
      STATIC: "/course/:courseId",
      DYNAMIC: (courseId) => `/course/${courseId}`,
    },
  };
  