const signUpSchema = {
    type: "object",
    properties: {
      firstName: {type: "string"},
      lastName: {type: "string"},
      dateOfBirth: {type: "string"},
      email: { type: "string" },
      password: { type: "string", minLength: 2 },
      repassword: { type: "string", minLength: 2 },
    },
    required: ["email", "dateOfBirth", "firstName", "lastName" ,"password", "repassword"],
    additionalProperties: true,
  };
  
  
  const loginSchema = {
    type: "object",
    properties: {
      email: {type: "string"},
      password: {type: "string", minLength: 2},
  
    },
    required: ["email", "password"],
    additionalProperties: false,
  }
  
  module.exports = { signUpSchema, loginSchema };
  