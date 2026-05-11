import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('client_log')
export class ClientLog {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  ip?: string;

  @Column({ name: 'user_agent', nullable: true })
  userAgent?: string;

  @Column({ nullable: true })
  method?: string;

  @Column({ nullable: true })
  path?: string;

  @Column({ nullable: true })
  host?: string;

  @Column({ nullable: true })
  referer?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
