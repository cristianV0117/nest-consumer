import { Module } from '@nestjs/common';
import { NotificationGateway } from './notifications.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [NotificationGateway],
})
export class NotificationsModule {}