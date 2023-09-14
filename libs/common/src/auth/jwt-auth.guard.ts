import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';
import { AUTH_SERVICE } from '@app/common';
// it is fixed if we used this import instead
// import { AUTH_SERVICE } from '@app/common/constants';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  // here is where AUTH_SERVIVE is undefined
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const jwt = context.switchToHttp().getRequest().cookies?.Authentication;

    if (!jwt) {
      return false;
    }

    // Ignoring this because we just want to test if the app runs. We are not using this logic
    this.authClient.send('using this for testing', {
      message: 'hi',
    });

    return true;
  }
}
