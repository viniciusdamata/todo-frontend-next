import { Todo } from "@/domain";
import { SaveTodoUseCase } from "@/domain/useCases/saveTodoUseCase";
import { HTTPPost } from "../protocols/httpPostClient";

export class RemoteSaveTodoUseCase implements SaveTodoUseCase {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HTTPPost.Client
  ) {}

  execute(params?: Todo): Promise<SaveTodoUseCase.Response> {
    return this.httpPostClient.post(this.url, {
      body: params,
    });
  }
}
