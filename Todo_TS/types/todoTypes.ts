export interface IApp {
  $target: HTMLElement | null;
  initialState: [];
}

export interface ITodoCount {
  $target: HTMLElement | null;
  initialState: [];
}

export interface ITodoList {
  $target: HTMLElement | null;
  initialState: [];
  handleComplete: (idx: any) => void;
  handleDelete: (idx: any) => void;
}

export interface ITodoEach {
  $target: HTMLElement | null;
  initialState: [];
  handleComplete: (idx: any) => void;
  handleDelete: (idx: any) => void;
}

export interface ITodo {
  text: string;
  isCompleted: boolean;
  idx: number;
}

export interface ICreateTodo {
  $target: HTMLElement | null;
  element: string; //태근디... "li"이런
  idx: number;
  text: string;
}
