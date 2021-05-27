import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Cabinet from "./Cabinet";

@Entity("profiles")
export default class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @ManyToOne(() => Cabinet, cabinet => cabinet.profiles)
  cabinet!: Cabinet;

  @CreateDateColumn()
  createdAt: string;
}
