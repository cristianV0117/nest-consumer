import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsReceivedModule } from './items-received/items-received.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ItemsReceivedModule,
    NotificationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}