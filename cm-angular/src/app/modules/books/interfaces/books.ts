export interface IBook {
  id: string;
  userId: string;
  name: string;
  author: string;
}

// dto

export interface IUpdateBookRequest extends Omit<IBook, 'userId'> {
}

export interface ICreateBookRequest extends Omit<IUpdateBookRequest, 'id'> {
}
