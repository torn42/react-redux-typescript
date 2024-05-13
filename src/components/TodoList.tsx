import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const TodoList: FC = () => {
  const { todos, loading, page, limit, error } = useTypedSelector(state => state.todoReducer);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map(p => (
          <div style={{
            border: p === page ? '1px solid yellow' : '1px solid gray',
            padding: '10px',
            cursor: 'pointer',
          }}
               onClick={() => setTodoPage(p)}
          >

            {p}
          </div>
        ))}
      </div>
    </div>
  );
};