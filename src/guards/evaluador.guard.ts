import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class EvaluadorGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    console.log('SASDFADSFADF');
    console.log(user);
    console.log(info);

    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    if (user.username !== 'evaluador') {
      throw new UnauthorizedException();
    }
    return user;
  }
}
