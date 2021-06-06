import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Cabinet from "./Cabinet";

@Entity("patients")
export default class Patient {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cin: string;
  @Column()
  sex: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  zipCode: number;
  @Column()
  assurance: string;
  @Column()
  birthday: string;
  @Column()
  profession: string;
  @Column()
  country: string;
  @Column()
  numberPhone: string;

  @CreateDateColumn()
  createdAt: string;
}
