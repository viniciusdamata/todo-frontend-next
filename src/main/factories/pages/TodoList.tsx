import TodoList from "@/presentation/pages/TodosPage/TodoList"
import { listAllTodosUseCaseFactory } from "../useCases/ListAllTodosUseCase"

export const TodoListFactory = () => {
    return (
        <TodoList listAllTodosUseCase={listAllTodosUseCaseFactory}/>
    )
}