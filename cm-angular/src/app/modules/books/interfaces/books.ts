export interface IBook {
  id: number;
  title: string;
  author: IAuthor;
}

export interface IAuthor {
  firstName: string;
  lastName: string;
}

// dto

export interface IUpdateBookRequest extends IBook {
}

export interface ICreateBookRequest {
  title: string;
  author: IAuthor;
}
