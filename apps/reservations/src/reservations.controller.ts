import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';

@Controller('reservations')
export class ReservationsController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async test() {
    return 'no bugs!';
  }
}
