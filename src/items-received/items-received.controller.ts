import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ItemsReceivedDto } from './dto/items-received.dto';

@Controller('items-received')
export class ItemsReceivedController {
    
    @MessagePattern('event')
    async handleEvent(data: ItemsReceivedDto) {
        console.log("Item recibido", data)
    }
}
