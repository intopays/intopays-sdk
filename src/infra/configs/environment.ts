type EnvironmentData = {
  HOST?: string
  TOKEN?: string
}

export type EnvironmentType = "production" | "development" | "test";

type Environment = Record<string, EnvironmentData>

export const environment: Environment = {
  production: {
    HOST: "https://app.intopays.com"
  },
  development: {
    HOST: "https://dev-app.intopays.com",
    TOKEN: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzZGtAaW50b3BheXMuY29tIiwiaWF0IjoxNzEzMTMzMDMwfQ.0uOXAMSq09aasfUkDCzuvaKVUBBAZf0mU1uBz-UDXkQ"
  }
};
