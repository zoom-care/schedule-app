import { AxiosResponse } from "axios";
import { HttpClient } from "../Axios/HttpClient";

export interface IBaseRepository<T, S = void> {
  get(id: any): Promise<T>;
  customGet(): Promise<T>;
  getMany(): Promise<T[]>;
  create(item: T): Promise<T>;
  update(id: any, item: T): Promise<T>;
  delete(id: any): Promise<T>;
  getAuthToken(credentials: S): Promise<T>;
}

const transform = (response: AxiosResponse): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve(response);
  });
};

export abstract class BaseRepository<T, S = void>
  extends HttpClient
  implements IBaseRepository<T, S>
{
  protected collection!: string;

  public async get(path: string): Promise<T> {
    const instance = this.createInstance();
    const result = await instance
      .get(`/${this.collection}/${path}`)
      .then(transform);
    return result as T;
  }

  public async customGet(): Promise<T> {
    const instance = this.createInstance();
    const result = await instance.get(`/${this.collection}`).then(transform);
    return result as T;
  }

  public async getMany(): Promise<T[]> {
    const instance = this.createInstance();
    const result = await instance.get(`/${this.collection}/`).then(transform);
    return result as T[];
  }

  public async create(item: T): Promise<T> {
    const instance = this.createInstance();
    const result = await instance
      .post(`/${this.collection}/`, item)
      .then(transform);
    return result as T;
  }

  public async update(id: string, item: T): Promise<T> {
    const instance = this.createInstance();
    const result = await instance
      .put(`/${this.collection}/${id}`, item)
      .then(transform);
    return result as T;
  }

  public async delete(id: any): Promise<T> {
    const instance = this.createInstance();
    const result = await instance
      .delete(`/${this.collection}/${id}`)
      .then(transform);
    return result as T;
  }

  public async getAuthToken(credentials: S): Promise<T> {
    const instance = this.createInstance();
    const result = await instance
      .post(`/${this.collection}`, credentials)
      .then(transform);
    return result as T;
  }
}
