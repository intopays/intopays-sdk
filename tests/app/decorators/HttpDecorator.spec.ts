import axios from "axios";
import { faker } from "@faker-js/faker";
import { Body } from "@/app/decorators/BodyDecorator";
import { Query } from "@/app/decorators/QueryDecorator";
import { Param } from "@/app/decorators/ParamDecorator";
import { HttpClient, GetRequest, PostRequest } from "@/app/decorators/HttpDecorator";

describe("Http Decorators", () => {
  const axiosInstance = axios.create({ baseURL: "http://localhost:3002" });
  const obj = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.phone.number()
  };

  describe("@HttpClient", () => {
    it("should add axios instance", () => {
      @HttpClient({ axiosInstance: "axiosInstance" })
      class HttpRequest {
        [x: string]: any
      }
      const httpRequest = new HttpRequest();
      expect(httpRequest._httpClientOptions.axiosInstance).toBe("axiosInstance");
    });

    it("should make a post request successfully", async() => {
      @HttpClient({ axiosInstance })
      class HttpRequest {
        @PostRequest("/users")
        async save(@Body data: any): Promise<any> {}
      }

      const httpRequest = new HttpRequest();
      const response = await httpRequest.save(obj);
      expect(response).toBeTruthy();
      expect(response.statusCode).toBe(201);
    });

    it("should make a get request successfully", async() => {
      @HttpClient({ axiosInstance })
      class HttpRequest {
        @GetRequest("/users")
        async findAll(): Promise<any> {}
      }

      const httpRequest = new HttpRequest();
      const response = await httpRequest.findAll();
      expect(response).toBeTruthy();
      expect(response.statusCode).toBe(200);
    });

    it("should make a request to find by id", async() => {
      @HttpClient({ axiosInstance })
      class HttpRequest {
        @GetRequest("/users/:id")
        async findById(@Param("id") myId: number): Promise<any> {}
      }

      const httpRequest = new HttpRequest();
      const id = 1;
      const response = await httpRequest.findById(id);
      expect(response).toBeTruthy();
      expect(response.data.id).toBe(id);
      expect(response.statusCode).toBe(200);
    });

    it("should make a request with query string", async() => {
      @HttpClient({ axiosInstance })
      class HttpRequest {
        @GetRequest("/users")
        async findById(@Query query: any): Promise<any> {}
      }

      const httpRequest = new HttpRequest();

      const response = await httpRequest.findById(obj);
      expect(response).toBeTruthy();
      expect(response.statusCode).toBe(200);
    });
  });
});
