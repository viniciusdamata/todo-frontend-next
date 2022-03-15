import { HTTPDelete } from "..";
import { RemoveTodoByIdUseCase } from "../../domain";

export class RemoteRemoveTodoByIdUseCase
  implements RemoveTodoByIdUseCase
{
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HTTPDelete.Client
  ) {}

  public async execute({
    id,
  }: RemoveTodoByIdUseCase.Params): Promise<RemoveTodoByIdUseCase.Response> {
    return this.httpGetClient.delete(`${this.url}/${encodeURIComponent(id)}`);
  }
}
