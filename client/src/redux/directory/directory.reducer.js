const INITIAL_STATE = {
  sections: [
    {
      title: "chair",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/chair",
    },
    {
      title: "tables",
      imageUrl:
        "https://images.unsplash.com/photo-1543936177-12e24c26776a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      id: 2,
      linkUrl: "shop/tables",
    },
    {
      title: "beds",
      imageUrl:
        "https://images.unsplash.com/photo-1552558636-f6a8f071c2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      id: 3,
      linkUrl: "shop/beds",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
