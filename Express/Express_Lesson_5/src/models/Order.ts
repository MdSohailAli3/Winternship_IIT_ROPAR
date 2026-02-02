import { IsString, IsInt, Min, IsDateString } from "class-validator";

export class Order {
  id!: string;

  @IsString()
  customerName!: string;

  @IsString()
  flavor!: string;

  @IsInt()
  @Min(1)
  quantity!: number;

  @IsDateString()
  pickupDate!: string;
}
