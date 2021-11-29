import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const validateUserAdmin = this.usersRepository.findById(user_id);

    if(!validateUserAdmin || !validateUserAdmin.admin) {
      throw new Error("Mensagem do erro");
    }

    const response = this.usersRepository.list();
    return response;
  }
}

export { ListAllUsersUseCase };
