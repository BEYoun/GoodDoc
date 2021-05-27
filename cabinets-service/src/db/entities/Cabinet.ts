import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Profile from "./Profile";

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

  @OneToMany(() => Profile, profile => profile.cabinet)
  profiles!: Profile[];

  @CreateDateColumn()
  createdAt: string;
}
