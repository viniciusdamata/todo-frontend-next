import { ListAllTodosUseCase, Todo } from "../../domain";
import { HTTPGet } from "../protocols/httpGetClient";

export class RemoteListAllTodosUseCase implements ListAllTodosUseCase {
  constructor(private httpGetClient: HTTPGet.Client) {}

  public async execute(): Promise<ListAllTodosUseCase.Response> {
    return this.httpGetClient.get();
  }
}
