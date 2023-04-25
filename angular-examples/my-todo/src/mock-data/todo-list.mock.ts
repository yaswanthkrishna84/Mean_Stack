import { TodoItem } from 'src/models/todo-item.model';

export const todoListItems: TodoItem[] = [
  {
    id: 1,
    title: 'Complete angular assignment',
    createdAt: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Complete Java record',
    createdAt: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Return Math book to library',
    createdAt: new Date(),
    isCompleted: false,
  },
  {
    id: 4,
    title: "Plan Sunday's schedule",
    createdAt: new Date(),
    isCompleted: false,
  },
];
