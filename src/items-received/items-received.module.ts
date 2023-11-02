import { Module } from '@nestjs/common';
import { ItemsReceivedController } from './items-received.controller';

@Module({
  imports: [],
  controllers: [ItemsReceivedController],
  providers: [],
})
export class ItemsReceivedModule {}