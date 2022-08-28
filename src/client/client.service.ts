import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Client, Prisma } from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async oneClient(clientId: number){
    return this.prisma.client.findUnique({
        where:{
            Id: clientId
        },
        include:{
            Grade: true
        } 
    });
  }

  async allClients(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClientWhereUniqueInput;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.client.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include:{
        Grade: true,
      }
    });
  }

  async createClient(createClientDto: CreateClientDto) {
    let idCount = await this.prisma.educationType.count(
      {
        where: {
          Id: createClientDto.EducationTypeId
        }
      }
    )

    return idCount;

    /*if (idCount >= 1) {
      return this.prisma.client.create({
        data: createClientDto
      });
    }*/
  }

  async updateClient(updateClientDto: UpdateClientDto, clientId: number){
    return this.prisma.client.update({
        data: updateClientDto,
        where:{
            Id: clientId
        }
    })
  }

  async deleteClient(clientId: number) {
    return this.prisma.client.delete({
      where:{
        Id: clientId,
      }
    });
  }
}