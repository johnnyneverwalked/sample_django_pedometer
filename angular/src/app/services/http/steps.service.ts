/**
 *Made with <3 by C.R.U.D. at 11/10/2019
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IDay} from "../../interfaces/IDay";

@Injectable({providedIn: "root"})
export class StepsService {
  public readonly baseUrl: string = "http://localhost:8000/steps";

  constructor(
    public httpClient: HttpClient
  ) {
  }

  create(options: IDay) {
    return this.httpClient.post(`${this.baseUrl}/create`, options || {})
  }

  retrieve(options: any = {}) {
    return this.httpClient.post(`${this.baseUrl}/`, options)
  }

  edit(id: number) {
    return this.httpClient.get(`${this.baseUrl}/edit/${id}`)
  }

  getByDate(date: string = "") {
    return this.httpClient.get(`${this.baseUrl}/date/${date}`)
  }

  update(id: number, options: Partial<IDay> = {}) {
    return this.httpClient.put(`${this.baseUrl}/edit/${id}`, options)
  }
}
