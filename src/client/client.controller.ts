import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Client as ClientModel } from '@prisma/client';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
    constructor(
        private readonly clientService: ClientService
    ){}

    @Get(':id')
    async oneClient(@Param('id') id: string){
        let clientId = Number(id);
        return this.clientService.oneClient(clientId)
    }


    @Get()
    async allClients(){
        return this.clientService.allClients({});
    }

    @Post('create')
    async createClient(@Body() createClientDto: CreateClientDto){
        return this.clientService.createClient(createClientDto);
    }

    @Put('update/:id')
    async updateClient(@Body() updateClientDto: UpdateClientDto, @Param('id') id: string){
        let clientId = Number(id);
        return this.clientService.updateClient(updateClientDto,clientId);
    }

    @Delete('delete/:id')
    async deleteClient(@Param('id') id: string){
        let clientId = Number(id);
        return this.clientService.deleteClient(clientId)
    }
}