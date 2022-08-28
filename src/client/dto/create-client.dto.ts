import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClientDto {
    Id?: number

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    Name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(255)
    Email: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(30)
    Password: string;

    @IsNumber()
    @IsNotEmpty()
    EducationTypeId: number;

    @IsNumber()
    @IsNotEmpty()
    GradeId: number;
}