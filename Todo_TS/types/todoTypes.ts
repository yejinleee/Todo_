interface ITodoBase<T> {
  $target: T;
}
export interface IApp<T> extends ITodoBase<T> {
  initialState: ITodo[];
}
export interface ITodoHeader<T> extends ITodoBase<T> {
  text: string;
}
export interface ITodoForm<T> extends ITodoBase<T> {
  onSubmit: (text: string) => void;
}
export interface ITodoCount<T> extends ITodoBase<T> {
  initialState: ITodo[];
}

export interface ITodoList<T> extends ITodoBase<T> {
  initialState: ITodo[];
  handleComplete: (idx: number) => void;
  handleDelete: (idx: number) => void;
}

export interface ITodo {
  text: string;
  isCompleted: boolean;
  idx: number;
}

export interface ICreateTodo {
  $target: HTMLElement | null;
  element: 'li' | 'button';
  idx: number;
  text: string;
}
