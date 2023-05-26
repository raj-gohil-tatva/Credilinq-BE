import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'Register' })
export class Register {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ nullable: false })
  CompanyUEN: string;

  @Column({ nullable: false })
  CompanyName: string;

  @Column({ nullable: false })
  CompanyPosition: string;

  @Column({ nullable: false })
  FullName: string;

  @Column({ nullable: false })
  Email: string;

  @Column({ nullable: false })
  PhoneNumber: string;

  @Column({ type: 'jsonb', nullable: true })
  DocumentPathList: string[];
}
