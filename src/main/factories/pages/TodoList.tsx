import TodoList from "../../../components/TodosPage/TodoList"
import { listAllTodosUseCaseFactory } from "../useCases/ListAllTodosUseCase"

export const TodoListFactory = () => {
    return (
        <TodoList listAllTodosUseCase={listAllTodosUseCaseFactory}/>
    )
}