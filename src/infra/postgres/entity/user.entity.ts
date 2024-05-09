import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IUserModel } from "../../../domain/models/user-model";

@Entity()
export class User implements IUserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 50 })
  name: string;
  @Column({ length: 50 })
  email: string;
  @Column({ length: 120 })
  password: string;
  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn({ nullable: true })
  updatedAt?: string;
}
