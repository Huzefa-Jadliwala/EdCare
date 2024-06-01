// swagger.js
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Edcare Chemnitz API Documention",
      version: "1.0.0",
      description:
        "API documentation for all the available routes for Edacre Chemnitz official website.",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: [
    "./routes/data.route.js",
    "./routes/auth.route.js",
    "./routes/user.route.js",
  ],
  components: {
    schemas: {
      UserUpdate: {
        type: "object",
        properties: {
          email: { type: "string" },
          username: { type: "string" },
          password: { type: "string" },
          profilePicture: { type: "string" },
          homeX: { type: "number" },
          homeY: { type: "number" },
          favouriteX: { type: "number" },
          favouriteY: { type: "number" },
        },
      },
    },
  },
};

const specs = swaggerJsdoc(options);
console.log(specs);

export default specs;
