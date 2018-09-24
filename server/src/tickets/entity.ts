import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Timestamp } from 'typeorm'
import User from '../users/entity'
import { IsString } from 'class-validator';

@Entity()
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  description: string

  @IsString()
  @Column('text')
  image: string

  @Column('number')
  price: number

  @Column('date')
  date: Timestamp

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
//   @OneToMany(_ => Comment //, comment => comment.ticket, {eager:true})
//   //comments: Comment[]

//   @ManyToOne(_ => Event //, event => event.tickets)
//   //event: Event

//   @ManyToOne(_ => User, user => user.tickets)
//   user: User
}