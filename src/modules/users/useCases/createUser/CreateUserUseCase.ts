import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const validateUser = this.usersRepository.findByEmail(email);

    if(validateUser) {
      throw new Error("Mensagem do erro");
    }
    
    const response = this.usersRepository.create({name, email});
    return response;
  }
}

export { CreateUserUseCase };
