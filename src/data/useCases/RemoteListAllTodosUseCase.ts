import { ListAllTodosUseCase, Todo } from "../../domain";
import { HTTPGet } from "../protocols/httpGetClient";

export class RemoteListAllTodosUseCase implements ListAllTodosUseCase {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HTTPGet.Client
  ) {}

  public async execute(
    { archived }: ListAllTodosUseCase.Params = { archived: false }
  ): Promise<ListAllTodosUseCase.Response> {
    return this.httpGetClient.get(this.url, {
      query: { archived },
    });
  }
}
