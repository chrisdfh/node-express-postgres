// module.exports = {
//     components: {
//       schemas: {
//         // id model
//         id: {
//           type: "string", // data type
//           description: "An id of a todo", // desc
//           example: "tyVgf", // example of an id
//         },
//         // todo model
//         Todo: {
//           type: "object", // data type
//           properties: {
//             id: {
//               type: "string", // data-type
//               description: "Todo identification number", // desc
//               example: "ytyVgh", // example of an id
//             },
//             title: {
//               type: "string", // data-type
//               description: "Todo's title", // desc
//               example: "Coding in JavaScript", // example of a title
//             },
//             completed: {
//               type: "boolean", // data type
//               description: "The status of the todo", // desc
//               example: false, // example of a completed value
//             },
//           },
//         },
//         // Todo input model
//         TodoInput: {
//           type: "object", // data type
//           properties: {
//             title: {
//               type: "string", // data type
//               description: "Todo's title", // desc
//               example: "Coding in JavaScript", // example of a title
//             },
//             completed: {
//               type: "boolean", // data type
//               description: "The status of the todo", // desc
//               example: false, // example of a completed value
//             },
//           },
//         },
//         // error model
//         Error: {
//           type: "object", //data type
//           properties: {
//             message: {
//               type: "string", // data type
//               description: "Error message", // desc
//               example: "Not found", // example of an error message
//             },
//             internal_code: {
//               type: "string", // data type
//               description: "Error internal code", // desc
//               example: "Invalid parameters", // example of an error internal code
//             },
//           },
//         },
//       },
//     },
//   };

module.exports = {
  // operation's method
  get: {
    tags: ["Tag CRUD operations"], // operation's tag.
    description: "Get all", // operation's desc.
    operationId: "getTodos", // unique operation id
    parameters: [
      // expected params.
      // {
      //   name: "id", // name of the param
      //   in: "path", // location of the param
      //   schema: {
      //     $ref: "#/components/schemas/id", // data model of the param
      //   },
      //   required: true, // Mandatory param
      //   description: "todos", // param desc.
      // },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Todo is obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Tag", // todo data model
            },
          },
        },
      },
      // response code
      404: {
        description: "Todo is not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
};