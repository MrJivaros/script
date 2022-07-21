
const data = [
    {
      name: "person 1",
      children: [
        {
          name: "children 1",
          children: [
            {
              name: "children 1-1 ",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "person 2",
      children: [
        {
          name: "children 2",
          children: [
            {
              name: "children 2-1 ",
              children: []
            }
          ]
        }
      ]
    }
  ]
  
  
  firstLoopLabel: for (let i = 0; i < data.length; ++i) {
    const children = data[i].children
    for (let j = 0; j < children.length; ++j) {
      const item = children[j]
      console.log("item", item)
  
      if (item.name === 'children 1') {
        break firstLoopLabel
      }
    }
  }