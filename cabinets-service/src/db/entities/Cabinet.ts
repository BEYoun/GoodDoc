import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cabinets")
export default class Cabinet {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string
  
  @Column()
  phone: string

  @Column({ default: 1 })
  numberDoc: number
  
  @Column({ default: 1 })
  numberAss: number

  @CreateDateColumn()
  createdAt: string;
}
