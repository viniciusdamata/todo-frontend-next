import { FindTodoByIdUseCase, Todo } from "../../domain";
import { HTTPGet } from "../protocols/httpGetClient";

export class RemoteFindTodoByIdUseCase implements FindTodoByIdUseCase {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HTTPGet.Client
  ) {}

  public async execute({
    id,
  }: FindTodoByIdUseCase.Params): Promise<FindTodoByIdUseCase.Response> {
    return this.httpGetClient.get(`${this.url}/${id}`);
  }
}
